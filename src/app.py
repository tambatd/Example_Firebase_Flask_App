import pyrebase
import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, request, render_template, session, g, redirect, url_for
import os
import random



app = Flask(__name__, static_folder=r"templates/assets")

#This config file will have all your firebase data
config = {  
  "apiKey": "",
  "authDomain": "",
  "databaseURL": "",
  "projectId": "",
  "storageBucket": "",
  "messagingSenderId": "",
  "appId": "",
  "measurementId": ""
  }

#FIREBASE CREDENTIAL Certificate goes below to initalize app
cred = credentials.Certificate("cred.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
firebase = pyrebase.initialize_app(config)

users_ref = db.collection(u'users')
docs = users_ref.stream()

auth = firebase.auth()

user = None

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/files')
def files():
    if auth.current_user == None:
        return redirect(url_for('login'))
    else:
        iden = auth.current_user['localId']
        #print(iden)
        try:   
            user_data = db.document('users/'+iden)
            doc = user_data.get()
            x = doc.to_dict()
            downloads = x["d"]
            #print(downloads)
            i = len(downloads)
            return render_template("files.html", downloads = downloads, i = i)
        except KeyError:
            return redirect(url_for('login'))  

@app.route('/login')
def login():
  return render_template('login.html')

@app.route('/login', methods =['POST'])
def login_getvalues():
  un = request.form['username']
  password = request.form['password']
  #print(un)
  #print(password)
  try:
    auth.sign_in_with_email_and_password(un, password)
    return redirect(url_for('files'))
  except:
    return render_template('login.html', failedlogin = True)


@app.route('/schedule')
def schedule_render():
    if auth.current_user == None:
        return redirect(url_for('login'))
    else:        
        schedule_list = []
        user = auth.current_user
        iden = user['localId']
        doc_ref = db.collection(r'users').document(iden).collection("jobs")
        docs = doc_ref.stream()
        for doc in docs:
            schedule_list.append(doc.to_dict())
        #print(schedule_list)
        return render_template('schedule.html', schedule_list = schedule_list)


@app.route('/schedule',methods =['POST'] )
def schedule():
    user = auth.current_user
    iden = user['localId']
    #print(iden)
    job = {
        "info": "",
        "date": "",
        "O1": "",
        "adinfo": "",
    }
    for key in job.keys():
        if key in request.form:
            job[key] = request.form[key] 
 
     
 
    try:
        #print(db.collection(r'users').document(iden))
        doc_ref = db.collection(r'users').document(iden).collection("jobs")
        #print("docref works")
        doc_ref.add(job)
        #print("successfully pushed")
        schedule_list = []
        user = auth.current_user
        iden = user['localId']
        doc_ref = db.collection(r'users').document(iden).collection("jobs")
        docs = doc_ref.stream()
        for doc in docs:
            schedule_list.append(doc.to_dict())
        #print(schedule_list)
        return render_template('schedule.html', schedule_list = schedule_list)
        
    except:
        fl = "app failed to send info"
        return render_template('schedule.html', info = fl)

@app.route('/logout')
def logout():
    auth.current_user == None
    return redirect(url_for('login', logout=True))  

if __name__ == '__main__':
    app.run(debug=False)


 
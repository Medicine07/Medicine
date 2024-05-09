from flask import Flask,request,render_template,session,flash,redirect
import sqlite3
app=Flask(__name__)

def create_connection():
    conn = sqlite3.connect('users.db')
    return conn

def create_table():
    conn = create_connection()
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (username TEXT, password TEXT)''')
    conn.commit()
    conn.close()

create_table()
@app.route('/', methods=['GET', 'POST'])
def register():
    if request.method =='POST':
        username = request.form['username']
        password = request.form['password']
        conn = create_connection()
        c = conn.cursor()
        c.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
        conn.commit()
        conn.close()
    return render_template('register.html')
@app.route('/home', methods=['GET','POST'])
def welcome():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        conn = create_connection()
        c = conn.cursor()
        c.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password))
        user = c.fetchone()
        conn.close()
        if user:
            return render_template('home.html')
        else:
            return 'username not found'
    return render_template('welcome.html')
@app.route('/login')
def welcome1():
    return render_template('welcome.html')

@app.route('/click1')
def home():
    return render_template('tablets.html')
@app.route('/click2')
def tablets():
    return render_template('nutrition.html')
@app.route('/click3')
def nutrition():
    return render_template('skincare.html')
 
@app.route('/click4')
def skincare():
    return render_template('homeopathy.html')



if __name__=='__main__':
    app.run(debug=True)

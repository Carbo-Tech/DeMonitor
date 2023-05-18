from flask import Flask, render_template
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')
@app.route('/portfolio-details.html')
def contact2():
    return render_template('inner-page.html')

if __name__ == '__main__':
    app.run()
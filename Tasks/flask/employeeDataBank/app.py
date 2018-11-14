from flask import Flask, render_template, request
from data import empData
app=Flask(__name__)


emp = empData()


@app.route('/')

def home():
    return render_template('home.html')


@app.route('/employee')
def emplo():
    return render_template('employee.html',empList=emp)

if(__name__ == '__main__'):
    app.run(debug=True)

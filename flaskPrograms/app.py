from flask import Flask, render_template, request


app=Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World'

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/send', methods=['GET', 'POST'])
def send():
    if(request.method=='POST'):
        getName = request.form['name']
        getMobile = request.form['mobile']
        getEmail = request.form['email']
        getSub = request.form['subject']
        getMes = request.form['message']
        return render_template('result.html', newName=getName, newMobile=getMobile, newEmail=getEmail,newSub=getSub, newMes=getMes)



if(__name__ == '__main__'):
    app.run(debug=True)

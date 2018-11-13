from flask import Flask

app=Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World'

@app.route('/home')
def home():
    return 'Welcome Home'

@app.route('/about')
def about():
    return 'About This Page '
    
@app.route('/contact')
def contact():
    return 'Contact us'

if(__name__ == '__main__'):
    app.run(debug=True)

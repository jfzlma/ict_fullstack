from flask import Flask, render_template, request


app=Flask(__name__)






@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/send', methods=['GET', 'POST'])

def send():
    if(request.method=='POST'):

        def grade(percent):
            
            if(percent>=90):
                return 'A'
            elif(percent>=80):
                return 'B'
            elif(percent>=70):
                return 'C'
            elif(percent>=60):
                return 'D'
            else:
                return 'F'
        name = request.form['name']
        regnum = request.form['get_reg_no']
        sem = request.form.get('get_sem')

        sub1 = request.form['sub1_name']
        mark1 = int(request.form['sub1_mark'])
        total1 = int(request.form['sub1_total_mark'])

        sub2 = request.form['sub2_name']
        mark2 = int(request.form['sub2_mark'])
        total2 =int(request.form['sub2_total_mark'])

        sub3 = request.form['sub3_name']
        mark3 = int(request.form['sub3_mark'])
        total3 = int(request.form['sub3_total_mark'])

        sub4 = request.form['sub4_name']
        mark4 = int(request.form['sub4_mark'])
        total4 = int(request.form['sub4_total_mark'])

        per1 = ( mark1/total1 ) * 100
        per2 = ( mark2/total2 ) * 100
        per3 = ( mark3/total3 ) * 100
        per4 = ( mark4/total4 ) * 100

        gra1 = grade(per1)
        gra2 = grade(per2)
        gra3 = grade(per3)
        gra4 = grade(per4)

        if(gra1 != 'F' and gra2 != 'F' and gra3 !='F' and gra4 != 'F'):
            status='Pass'
        else:
            status='Fail'
    
    
    
    
    
    
    return render_template('result.html', name=name, regnum=regnum,sub1=sub1,sem=sem,mark1=mark1,total1=total1,sub2=sub2, mark2=mark2,total2=total2,sub3=sub3, mark3=mark3,total3=total3,sub4=sub4,mark4=mark4, total4=total4,gra1=gra1,gra2=gra2,gra3=gra3,gra4=gra4,status=status)



if(__name__ == '__main__'):
    app.run(debug=True)

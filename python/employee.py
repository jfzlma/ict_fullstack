class employee:
    def __init__(self,name,age,salary,code):
        self.name=name
        self.age=age
        self.salary=salary
        self.code=code

    def printdata(self):
        print("employee name  :",self.name)
        print("employee age   :",self.age)
        print("employee salary:",self.salary)
        print("employee code  :",self.code)


n=input("enter the name   :")
a=int(input("enter age    :"))
s=int(input("enter salary :"))
c=int(input("enter code   :"))

e=employee(n,a,s,c)

e.printdata()
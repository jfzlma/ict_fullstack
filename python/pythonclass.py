class Students:

    def __init__(self,x,y):
        self.name=x
        self.rollno=y

    def printdata(self):
        print("Name : ", self.name)
        print("Roll No: ", self.rollno)

    def getage(self, myage):
        print("Age is: " +str(myage))

z=Students("Rahul ",23)
x=int(input("Enter the Age :"))
z.printdata()
z.getage(x)




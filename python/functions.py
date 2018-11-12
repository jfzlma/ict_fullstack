# def display(name):
#     print("Welcome "+name)
# display("jff")


# def add(a,b):
#     return a+b

# print(add(5,3))



def add(a,b):
    c = a+b
    return c
def sub(a,b):
    c = a-b
    return c
def mul(a,b):
    c = a*b
    return c
def div(a,b):
    c = a/b
    return c


x = int(input("Enter Num1: "))
y = int(input("Enter Num2: "))

result = add(x,y)
print(result)
result = sub(x,y)
print(result)
result = mul(x,y)
print(result)
result = div(x,y)
print(result)

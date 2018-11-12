myFile = open("hello.txt", "w")
myFile.write("ICT Academy Fullstack Developer Class")

myFile.close()
print("Done!")


file = open("hello.txt", "r")
print(file.read())
file.close()

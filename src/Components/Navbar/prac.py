import matplotlib.pyplot as plt

def createCircle() : 
    c = plt.Circle((0, 0), radius = 4, color = 'pink')
    plt.gca().add_patch(c) #imp
    plt.axis('scaled')
    plt.show()

createCircle()
    
a = [1, 2, 3]
b = [4, 5, 6]
c = a+b
print(c)
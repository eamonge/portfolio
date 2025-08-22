'''

Universidas Fidélitas

Programación Básica

Semana 8

Estudiante: Sofia Cerdas Delgado

'''
 
# Ejercicio 5. Concatenar texto
 


# print("¡Concatenemos con el ciclo for!")
 
# opcion = int(input("¿Cuántos números desea digitar?: "))

# i=1

# suma = 0

# for i in range (0,opcion):

#     num = int(input("Ingrese el valor que desee: "))

#     suma = suma + num  

# print ("\tEl total es de: ",suma)
 
 
# print("¡Concatenemos con el ciclo while!")
 
suma = 0

opcion = 1
 
while opcion == 1 and opcion != 0:
    num = int(input("Ingrese el valor que desee: "))
    suma = suma + num
    opcion = int(input("Desea ingresar otro valor? Digite 1 si sí y 0 si no: "))

print ("\nEl total es de: ",suma)
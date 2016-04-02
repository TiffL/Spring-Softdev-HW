def repeat(x):
    return lambda y: x * y

r1 = repeat("hello")
print r1(2) # expecting hellohello

r2 = repeat("goodbye")
print r2(2) # expecting goodbyegoodbye

print repeat('cool')(3) # expecting coolcoolcool

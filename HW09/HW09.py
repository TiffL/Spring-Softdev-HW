import time

def fib(num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        return fib(num-1)+fib(num-2)

def nameArgs(f):
    def inner(*arg):
        return f.func_name + ": " + str(f(*arg))
    return inner

def execution_time(f):
    def inner(*arg):
        f(*arg)
        return "execution time: " + str(time.time())
    return inner

closure = nameArgs(fib)
print closure(4)

closure2 = execution_time(fib)
print closure2(4)
print closure2(30)

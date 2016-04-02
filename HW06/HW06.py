
#~~~~~~~~~~~~~~~~~~~~~~~~Task 1: MeetsMin~~~~~~~~~~~~~~~~~~~~~~~~~

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
num="0123456789"

def meetsMin(password):
    if (sum([1 if x in UC_LETTERS else 0 for x in password]) > 0):
        if (sum([1 if x in LC_LETTERS else 0 for x in password]) > 0):
            if (sum([1 if x in num else 0 for x in password]) > 0):
                return True
    return False

print "\n\n MeetsMin Testing \n"
print meetsMin("Password123") #Expecting True
print meetsMin("password123") #Expecting False
print meetsMin("11") #Expecting False

#~~~~~~~~~~~~~~~~~~~~~~~~Task 2: PasswordStrength~~~~~~~~~~~~~~~~~~~~~~~~~

variousChars = ".?!&#,;:-_*"
def passwordStrength(password):
    strength = 0
    if (sum([1 if x in UC_LETTERS else 0 for x in password]) > 0):
        strength += 1
    if (sum([1 if x in LC_LETTERS else 0 for x in password]) > 0):
        strength += 1
    if (sum([1 if x in num else 0 for x in password]) > 0):
        strength += 1
    if (sum([1 if x in variousChars else 0 for x in password]) > 0):
        strength += 1
    if (len(password) > 4 and len(password) < 10):
        strength += len(password) - 4
    if (len(password) >= 10):
        strength += 6
    
    return strength

print "\n\n PasswordStrength Testing \n"
print passwordStrength("Password123") #Expecting 9
print passwordStrength("password123") #Expecting 8
print passwordStrength("11") #Expecting 1
print passwordStrength("Password123*") #Expecting 10
print passwordStrength("") #Expecting 0



########################################################################
#
#  EXERCISE 1 - INITALIZATION
#
#  Initialize the 'newList' variable as any kind of non-empty list
#  literal with at least one element in it
#
###################### YOUR CODE BELOW THIS LINE #######################

newList = ["Barakat"]

########################################################################



########################################################################
#
#  EXERCISE 2 - LIST COPY
#
#  Lists are stored in variables by their reference and not their value.
#  This means when you do 'list2 = list1', you are not creating a new
#  list, but a new variable pointing to the same list1. If you edit
#  list2, you will also edit list1 as its the same list.
#  To avoid this, you need to make a copy of the list
#  The below 'list1' looks like:
list1 = [ "This", "is", "a", "list" ]
#  Save a copy of 'list1' into 'listCopy', and then append 'appendElement':
appendElement = "ok?"
#  to the end of 'listCopy'
#  'list1' should remain unchanged
#
###################### YOUR CODE BELOW THIS LINE #######################

listCopy = list1.copy() #listCopy = list1[:]
listCopy.append(appendElement)

########################################################################



########################################################################
#
#  EXERCISE 3 - LIST ROUND ROBIN
#
#  Remove the first element of the list 'cycleMe' and put it as the last
#  element of 'cycleMe'. Do this TWICE
#  e.g. [ 1, 2, 3, 4, 5 ] -> [ 3, 4, 5, 1, 2 ]
#  This is how round-robin functionality is implemented in apps that
#  involve "taking turns"
import random
cycleMe = list(range(1, random.randint(5, 15)))
#  ^Note how easy it is to create an list of random length in Py over JS
#  cycleMeCopy is just a copy of the 'cycleMe' list used for checking answers,
#  please ignore it
cycleMeCopy = list(cycleMe)
#
###################### YOUR CODE BELOW THIS LINE #######################

#answer = cycleMe.pop(0)
cycleMe.append(cycleMe.pop(0))
#answer= cycleMe.pop(0)
cycleMe.append(cycleMe.pop(0))

########################################################################



########################################################################
#
#  EXERCISE 4 - LIST CLEAR FOR ONE REFERENCE
#
#  'clearJustMe' and 'keepMe' are currently two variables that reference the
#  same list
clearJustMe = list(range(1, random.randint(5, 15)))
keepMe = clearJustMe
#  Clear all data from 'clearJustMe' without affecting the 'keepMe' reference
#  so it still points to the original list. Do nothing to 'keepMe'.
#
###################### YOUR CODE BELOW THIS LINE #######################

clearJustMe = []

########################################################################



########################################################################
#
#  EXERCISE 5 - LIST CLEAR FOR ALL REFERENCES
#
#  'clearAll' and 'loseMe' are currently two variables that reference the
#  same list
clearAll = list(range(1, random.randint(5, 15)))
loseMe = clearAll
#  Clear all data from 'clearAll' and have this affect the 'loseMe' reference
#  so that it too reference the same emptied list. Do nothing to 'loseMe'.
#
###################### YOUR CODE BELOW THIS LINE #######################

clearAll.clear()

########################################################################



########################################################################
#
#  EXERCISE 6 - LIST TOP THREE SCORE
#
#  'allScores' is a list of 8 student's scores out of 100
allScores = [ random.randint(0, 100), random.randint(0, 100), random.randint(0, 100), random.randint(0, 100), random.randint(0, 100), random.randint(0, 100), random.randint(0, 100), random.randint(0, 100)]
#  get the top 3 scores of this list and save them into 'top3Scores'
#  in descending order i.e. [ 1st, 2nd, 3rd ]
allScoresCopy = list(allScores)
#
###################### YOUR CODE BELOW THIS LINE #######################

allScores.sort()
allScores.reverse()
top3Scores = allScores[0:3]



########################################################################



####################### END OF LISTS EXERCISES #########################



########################################################################
#
#                               ANSWERS
#
#  DO NOT LOOK AT THIS SECTION UNTIL YOU HAVE FINISHED THE EXERCISES
#
#  The following code tests the variables you need to work on to confirm your work is
#  correct. The if conditions check the variables are correct and the print()
#  statements are what make the print outs you see when you run the file. The below
#  is a crude demonstration of what we refer to as code tests. Code testing is a
#  common practice in the software engineer's role, where tests are run to confirm all
#  code runs correctly. Only when all tests pass would we give ourselves the green light
#  to ship code to production and feel confident the system will perform as expected.
#
########################################################################

# setGreen instructs the shell to set the printed output to green
setGreen = "\x1b[32m"
# setRed instructs the shell to set the printed output to red
setRed = "\x1b[31m"
# resetColor instructs the shell to reset the printout color to standard
resetColor = "\x1b[0m"

# Set correctMsg and incorrectMsg Messages so I don't need to write it everytimne
correctMsg = setGreen + "Correct! " + resetColor
incorrectMsg = setRed + "Incorrect! " + resetColor

# totalTests and passedTests count the final tally of passed tests
totalTests = 0
passedTests = 0

# Add print statement so its easy to scroll to top of exercises
print("+----------------------------------+")
print("|                                  |")
print("|       EXERCISES START HERE       |")
print("|                                  |")
print("+----------------------------------+")
print("")

# List Initialization
if newList == None:
	print(incorrectMsg + "The initialized 'newList' variable should be defined")
elif type(newList) is list and len(newList) > 0:
	print(correctMsg + "The value of 'newList' you got was:")
	print(newList)
	passedTests+= 1
else:
	print(incorrectMsg + "'newList' should be an list with at least one element, yours looks like")
	print(newList)
totalTests += 1
print("")

# List copy
correctList1 = [ "This", "is", "a", "list" ]
correctListCopy = list(correctList1)
correctListCopy.append(appendElement)
if listCopy == None:
	print(incorrectMsg + "The initialized 'listCopy' variable should be defined")
elif type(listCopy) is list and listCopy == correctListCopy and list1 == correctList1:
	print(correctMsg + "'listCopy' looks like:")
	print(listCopy)
	print("Whereas 'list1' was unchanged and looks like:")
	print(list1)
	passedTests+= 1
else:
	print(incorrectMsg + "'listCopy' should look like:")
	print(correctListCopy)
	print("It looks like:")
	print(listCopy)
	print("And 'list1' should be unchanged and look like:")
	print(correctList1)
	print("It looks like")
	print(list1)
totalTests += 1
print("")

# List round robin
cycleMeCopy.append(cycleMeCopy.pop(0))
cycleMeCopy.append(cycleMeCopy.pop(0))
if cycleMe == None:
	print(incorrectMsg + "The initialized 'cycleMe' variable should be defined")
elif cycleMe == cycleMeCopy:
	print(correctMsg + "After two round robin turns the value of 'cycleMe' you got was:")
	print(cycleMe)
	passedTests+= 1
else:
	print(incorrectMsg + "After two round robin turns 'cycleMe' should be:")
	print(cycleMeCopy)
	print("but it looks like")
	print(cycleMe)
totalTests += 1
print("")

# List clear for one reference
if clearJustMe == None or keepMe == None:
	print(incorrectMsg + "The initialized 'clearJustMe' and 'keepMe' variables should be defined")
elif clearJustMe == [] and clearJustMe != keepMe:
	print(correctMsg + "The 'clearJustMe' variable looks like:")
	print(clearJustMe)
	print("while the 'keepMe' variable looks like:")
	print(keepMe)
	passedTests+= 1
else:
	print(incorrectMsg + "The 'clearJustMe' vairable should look like:")
	print([])
	print("It looks like:")
	print(clearJustMe)
	print("while the 'keepMe' variable should not be empty, and it looks like:")
	print(keepMe)
	print("If ^ is empty, it means you cleared 'clearJustMe' and affected 'keepMe's reference")
totalTests += 1
print("")

# List clear for all references
if clearAll == None or loseMe == None:
	print(incorrectMsg + "The initialized 'clearAll' and 'loseMe' variables should be defined")
elif clearAll == [] and clearAll == loseMe:
	print(correctMsg + "The 'clearAll' variable looks like:")
	print(clearAll)
	print("while the 'loseMe' variable looks like:")
	print(loseMe)
	passedTests+= 1
else:
	print(incorrectMsg + "The 'clearAll' vairable should look like:")
	print([])
	print("It looks like:")
	print(clearAll)
	print("while the 'loseMe' variable should be empty, and it looks like:")
	print(loseMe)
	print("If ^ is not empty but 'clearAll' is, it means you cleared 'clearAll' without affecting 'loseMe's reference")
totalTests += 1
print("")

# List to three scores
correctTop3Scores = list(allScoresCopy)
correctTop3Scores.sort(reverse=True)
correctTop3Scores = correctTop3Scores[0:3]
if top3Scores == None:
	print(incorrectMsg + "The initialized 'top3Scores' variable should be defined")
elif type(top3Scores) is list and top3Scores == correctTop3Scores:
	print(correctMsg + "The scores were: ")
	print(allScoresCopy)
	print("and the the top 3 scores you saved into 'top3Scores' were:")
	print(top3Scores)
	passedTests += 1
else:
	print(incorrectMsg + "The scores were: ")
	print(allScoresCopy)
	print("and the the top 3 scores you saved into 'top3Scores' should be:")
	print(correctTop3Scores)
	print("but you got:")
	print(top3Scores)
totalTests += 1
print("")

# Final Test Tally Determination
if passedTests == totalTests:
	print(setGreen + "You passed " + str(passedTests) + " / " + str(totalTests) + " tests. Congratulations!" + resetColor)
else:
	print(setRed + "You passed " + str(passedTests) + " / " + str(totalTests) + " tests. Keep Going!" + resetColor)
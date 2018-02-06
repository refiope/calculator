--2018.02.04 started project
--finished 2018.02.05

--On the first day after finishing the javascript exercises, I only touched on html and css to get the overall design for the calculator. I first tried it with bootstrap and it's row-column to order my buttons, but I did not like the loop of it. Whenever the size of the webpage changes it would look wonky and I decided that fixed size looked better than the flexible design bootstrap gives. So I ditched bootstrap for the css grid system. I tried bunch of design for the order of the buttons, and I decided to go wit 4 x 4, which looked neat and orderly. For the sake of looking good I searced google to see how I can improve the looks of buttons, and I found out this webpage (https://www.leemunroe.com/css-button/) which used layers of images on a button to make it look glossy.
--On the second day I worked on the script of actually implementing the functionality of a calculator. I thought about just making a simple one where it would calculate the first two numbers right away, but I decided to challenge myself and tried to work out how I would calculate multiplication/division first, then calculate addition/subtraction. And I came up with this: take the string of what's typed on the calculator (pText.textContent), split it up to two arrays, one with only numbers and the other operators by using regular expression and string methods. Then I iterated through the operator array to find * or /, and used them to calculate the numbers on the left and right bound of the operand. The calculated number replaced the two numbers used, and the used operand is also deleted. This process repeats until the operator array is empty.
--In all honesty, I could have used eval() function to calculate pText.textContent, but I found out that it is dangerous to use this function. So instead I have this long function (that I'm sure it can be shortened).     

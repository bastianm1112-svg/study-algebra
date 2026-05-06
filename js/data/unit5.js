export const unit5 = {
  id: 5,
  title: "Systems of Equations",
  emoji: "🔀",
  color: "#f7971e",
  topics: [
    {
      id: "systems-graphing",
      title: "Solving by Graphing",
      flashcards: [
        {
          front: "What is a system of equations?",
          back: "Two or more equations with the same variables considered together. The solution is the ordered pair (x, y) that satisfies ALL equations simultaneously. Example: y = x + 1 and y = −x + 5 — find where they intersect."
        },
        {
          front: "What is the solution to a system of equations?",
          back: "The point (x, y) where the graphs of the equations intersect. Example: if y = x + 1 and y = −x + 5 intersect at (2, 3), then the solution is (2, 3)."
        },
        {
          front: "What does one solution mean for a system?",
          back: "The two lines intersect at exactly one point. This happens when the lines have different slopes. Example: y = 2x + 1 and y = −x + 4 cross at one point → one solution."
        },
        {
          front: "What does no solution mean for a system?",
          back: "The two lines are parallel and never intersect. They have the same slope but different y-intercepts. Example: y = 3x + 1 and y = 3x − 2 are parallel → no solution."
        },
        {
          front: "What does infinite solutions mean for a system?",
          back: "The two equations represent the same line (they overlap completely). They have the same slope and same y-intercept. Example: y = 2x + 4 and 2y = 4x + 8 are the same line → infinite solutions."
        },
        {
          front: "What is a consistent system?",
          back: "A system that has at least one solution (one solution or infinite solutions). The lines intersect or are the same line. Example: y = x + 2 and y = −x + 6 are consistent — they meet at (2, 4)."
        },
        {
          front: "What is an inconsistent system?",
          back: "A system with no solution — the lines are parallel and never intersect. Example: y = 4x + 3 and y = 4x − 1 are parallel and inconsistent."
        }
      ],
      problems: [
        {
          id: "sg-1",
          type: "multiple-choice",
          question: "Two lines are graphed. They intersect at (3, 5). What is the solution to the system?",
          choices: ["x = 3", "y = 5", "(3, 5)", "No solution"],
          answer: "(3, 5)",
          explanation: {
            steps: [
              "The solution to a system is the point where both graphs intersect.",
              "The lines intersect at (3, 5).",
              "The solution is the ordered pair (3, 5).",
              "This means x = 3 and y = 5 satisfy both equations."
            ],
            tip: "The solution is always written as an ordered pair (x, y) — both values together."
          }
        },
        {
          id: "sg-2",
          type: "multiple-choice",
          question: "What does it mean if two lines in a system are parallel?",
          choices: [
            "The system has one solution",
            "The system has no solution",
            "The system has infinite solutions",
            "The lines are the same"
          ],
          answer: "The system has no solution",
          explanation: {
            steps: [
              "Parallel lines have the same slope but different y-intercepts.",
              "Parallel lines never intersect.",
              "If lines never intersect, there is no point satisfying both equations.",
              "The system has no solution."
            ],
            tip: "Parallel lines = same slope = no solution."
          }
        },
        {
          id: "sg-3",
          type: "multiple-choice",
          question: "How many solutions does the system y = 2x + 3 and y = 2x − 1 have?",
          choices: ["One solution", "No solution", "Infinite solutions", "Two solutions"],
          answer: "No solution",
          explanation: {
            steps: [
              "Identify the slopes: both equations have slope m = 2.",
              "Identify the y-intercepts: b = 3 and b = −1 (different).",
              "Same slope + different y-intercept = parallel lines.",
              "Parallel lines never intersect → no solution."
            ],
            tip: "Check slopes first. Same slope + different y-intercept = no solution."
          }
        },
        {
          id: "sg-4",
          type: "multiple-choice",
          question: "How many solutions does y = 3x + 2 and 2y = 6x + 4 have?",
          choices: ["One solution", "No solution", "Infinite solutions", "Three solutions"],
          answer: "Infinite solutions",
          explanation: {
            steps: [
              "Simplify the second equation: divide by 2 → y = 3x + 2.",
              "Both equations are identical: y = 3x + 2.",
              "Two identical equations represent the same line.",
              "Every point on the line is a solution → infinite solutions."
            ],
            tip: "If both equations simplify to the same thing, they're the same line — infinite solutions."
          }
        },
        {
          id: "sg-5",
          type: "multiple-choice",
          question: "Is the point (2, 3) a solution to the system y = x + 1 and y = 2x − 1?",
          choices: ["Yes, it satisfies both equations", "No, it only satisfies the first", "No, it only satisfies the second", "No, it satisfies neither"],
          answer: "Yes, it satisfies both equations",
          explanation: {
            steps: [
              "Check (2, 3) in y = x + 1: 3 = 2 + 1 = 3. ✓",
              "Check (2, 3) in y = 2x − 1: 3 = 2(2) − 1 = 4 − 1 = 3. ✓",
              "The point satisfies both equations.",
              "(2, 3) is the solution to the system."
            ],
            tip: "Always check a potential solution in BOTH equations."
          }
        },
        {
          id: "sg-6",
          type: "multiple-choice",
          question: "What is the number of solutions when two lines have different slopes?",
          choices: ["No solution", "One solution", "Infinite solutions", "Two solutions"],
          answer: "One solution",
          explanation: {
            steps: [
              "Lines with different slopes are not parallel — they will intersect.",
              "Two non-parallel lines in a plane intersect at exactly one point.",
              "That one intersection point is the unique solution.",
              "Different slopes → one solution."
            ],
            tip: "Different slopes guarantee exactly one intersection point → one solution."
          }
        },
        {
          id: "sg-7",
          type: "multiple-choice",
          question: "How many solutions does y = −x + 4 and y = x − 2 have?",
          choices: ["No solution", "Infinite solutions", "One solution", "Four solutions"],
          answer: "One solution",
          explanation: {
            steps: [
              "y = −x + 4 has slope m = −1.",
              "y = x − 2 has slope m = 1.",
              "The slopes are different (−1 ≠ 1).",
              "Different slopes → the lines intersect at one point → one solution."
            ],
            tip: "Set the equations equal to find the actual intersection: −x + 4 = x − 2 → x = 3, y = 1."
          }
        },
        {
          id: "sg-8",
          type: "fill-in",
          question: "Is the point (1, 4) a solution to y = 3x + 1 and y = 5x − 1? Answer 'yes' or 'no'.",
          answer: "yes",
          explanation: {
            steps: [
              "Check in y = 3x + 1: y = 3(1) + 1 = 3 + 1 = 4. ✓",
              "Check in y = 5x − 1: y = 5(1) − 1 = 5 − 1 = 4. ✓",
              "The point (1, 4) satisfies both equations.",
              "Answer: yes."
            ],
            tip: "Plug the x-value into both equations and see if you get the same y."
          }
        },
        {
          id: "sg-9",
          type: "multiple-choice",
          question: "A system is described as 'inconsistent'. What does this mean?",
          choices: [
            "It has one solution",
            "It has infinite solutions",
            "It has no solution",
            "The equations are identical"
          ],
          answer: "It has no solution",
          explanation: {
            steps: [
              "An inconsistent system has no solution.",
              "This occurs when the lines are parallel (same slope, different y-intercept).",
              "Since parallel lines never intersect, there is no (x, y) satisfying both.",
              "Inconsistent = no solution."
            ],
            tip: "Consistent = at least one solution. Inconsistent = no solution."
          }
        },
        {
          id: "sg-10",
          type: "fill-in",
          question: "For y = 2x + 1 and y = 2x + 5: how many solutions does the system have? Write 'zero', 'one', or 'infinite'.",
          answer: "zero",
          explanation: {
            steps: [
              "Both lines have slope m = 2.",
              "y-intercepts are 1 and 5 — they are different.",
              "Same slope, different y-intercept → parallel lines.",
              "Parallel lines never meet → zero solutions."
            ],
            tip: "When slopes match but y-intercepts differ, the lines are parallel — no solution."
          }
        }
      ],
      guide: {
        concept: "Solving a system of equations by graphing means graphing both lines and finding the intersection point. The intersection is the solution. Lines can intersect once (one solution), be parallel (no solution), or be the same line (infinite solutions).",
        examples: [
          {
            problem: "Solve by graphing: y = x + 2 and y = −x + 6.",
            steps: [
              "Graph y = x + 2: y-intercept at (0,2), slope = 1.",
              "Graph y = −x + 6: y-intercept at (0,6), slope = −1.",
              "Find intersection: x + 2 = −x + 6 → 2x = 4 → x = 2, y = 4.",
              "Solution: (2, 4)."
            ],
            answer: "(2, 4)"
          }
        ],
        tips: [
          "Same slope, different y-intercept → parallel → no solution.",
          "Same slope AND same y-intercept → same line → infinite solutions.",
          "Different slopes → one unique solution."
        ],
        commonMistakes: [
          "Reading the graph imprecisely — graphing gives approximate answers unless exact.",
          "Forgetting to check the solution in BOTH equations."
        ]
      }
    },
    {
      id: "systems-substitution",
      title: "Solving by Substitution",
      flashcards: [
        {
          front: "What are the steps for solving a system by substitution?",
          back: "1) Solve one equation for one variable. 2) Substitute that expression into the other equation. 3) Solve for the remaining variable. 4) Substitute back to find the other variable. 5) Check both equations."
        },
        {
          front: "When is substitution the easiest method?",
          back: "When one equation is already solved for a variable (like y = 2x + 1 or x = 3y − 2). Example: y = 2x + 1 and 3x + y = 11 — y is already isolated, substitute directly."
        },
        {
          front: "What does it mean to substitute an expression?",
          back: "Replace a variable in one equation with an equivalent expression from the other equation. Example: if y = x + 3, replace y in 2x + y = 10 with (x + 3): 2x + (x + 3) = 10."
        },
        {
          front: "What is back-substitution?",
          back: "After finding the value of one variable, plug it back into either original equation to find the other. Example: found x = 2, use y = x + 3 → y = 2 + 3 = 5. Solution: (2, 5)."
        },
        {
          front: "What does it mean to check a solution?",
          back: "Substitute the (x, y) values into both original equations to verify they work. Example: Is (3, 7) the solution to y = 2x + 1 and x + y = 10? Check: 7 = 2(3)+1 ✓ and 3+7 = 10 ✓."
        },
        {
          front: "What does it mean if substitution gives 0 = 0?",
          back: "If you get a true statement like 0 = 0 or 5 = 5, the system has infinite solutions — the equations represent the same line."
        },
        {
          front: "What does it mean if substitution gives a contradiction like 3 = 7?",
          back: "A false statement means the system has no solution — the lines are parallel. Example: if you get 4 = 9 during solving, there is no solution."
        }
      ],
      problems: [
        {
          id: "ss-1",
          type: "fill-in",
          question: "Solve the system by substitution:\ny = 2x + 1\n3x + y = 11\nWhat is x?",
          answer: "2",
          explanation: {
            steps: [
              "y is already isolated: y = 2x + 1.",
              "Substitute into 3x + y = 11: 3x + (2x + 1) = 11.",
              "Combine: 5x + 1 = 11.",
              "Subtract 1: 5x = 10.",
              "Divide: x = 2."
            ],
            tip: "When y is already isolated, substitute the entire expression directly for y."
          }
        },
        {
          id: "ss-2",
          type: "fill-in",
          question: "Solve the system by substitution:\ny = 2x + 1\n3x + y = 11\nWhat is y? (Use x = 2 from the previous step.)",
          answer: "5",
          explanation: {
            steps: [
              "Now that x = 2, substitute back into y = 2x + 1.",
              "y = 2(2) + 1 = 4 + 1 = 5.",
              "The solution is (2, 5).",
              "Check: 3(2) + 5 = 6 + 5 = 11. ✓"
            ],
            tip: "Always back-substitute into the simplest equation to find the second variable."
          }
        },
        {
          id: "ss-3",
          type: "fill-in",
          question: "Solve the system by substitution:\ny = x − 3\n2x + y = 9\nWhat is x?",
          answer: "4",
          explanation: {
            steps: [
              "Substitute y = x − 3 into 2x + y = 9.",
              "2x + (x − 3) = 9.",
              "3x − 3 = 9.",
              "Add 3: 3x = 12.",
              "Divide: x = 4."
            ],
            tip: "Combine like terms after substituting."
          }
        },
        {
          id: "ss-4",
          type: "fill-in",
          question: "Using x = 4 from the previous problem (y = x − 3, 2x + y = 9), what is y?",
          answer: "1",
          explanation: {
            steps: [
              "x = 4, substitute into y = x − 3.",
              "y = 4 − 3 = 1.",
              "Solution: (4, 1).",
              "Check: 2(4) + 1 = 8 + 1 = 9. ✓"
            ],
            tip: "Back-substitute into the simplest equation — here y = x − 3 is easier than 2x + y = 9."
          }
        },
        {
          id: "ss-5",
          type: "fill-in",
          question: "Solve the system by substitution:\nx = 4y\nx + 2y = 18\nWhat is y?",
          answer: "3",
          explanation: {
            steps: [
              "Substitute x = 4y into x + 2y = 18.",
              "4y + 2y = 18.",
              "6y = 18.",
              "y = 3."
            ],
            tip: "x is isolated — substitute the whole expression 4y in place of x."
          }
        },
        {
          id: "ss-6",
          type: "fill-in",
          question: "Using y = 3 from the previous problem (x = 4y, x + 2y = 18), what is x?",
          answer: "12",
          explanation: {
            steps: [
              "y = 3, substitute into x = 4y.",
              "x = 4(3) = 12.",
              "Solution: (12, 3).",
              "Check: 12 + 2(3) = 12 + 6 = 18. ✓"
            ],
            tip: "x = 4y is simpler — just multiply y by 4."
          }
        },
        {
          id: "ss-7",
          type: "multiple-choice",
          question: "Solve by substitution: y = −x + 6 and x + y = 6.",
          choices: [
            "One solution: (3, 3)",
            "No solution",
            "Infinite solutions",
            "One solution: (6, 0)"
          ],
          answer: "Infinite solutions",
          explanation: {
            steps: [
              "Substitute y = −x + 6 into x + y = 6.",
              "x + (−x + 6) = 6.",
              "0 + 6 = 6.",
              "6 = 6 — a true statement for all values of x.",
              "The equations are the same line → infinite solutions."
            ],
            tip: "Getting a true identity (like 6 = 6) means infinite solutions — same line."
          }
        },
        {
          id: "ss-8",
          type: "multiple-choice",
          question: "Solve by substitution: y = 3x − 1 and y = 3x + 5.",
          choices: [
            "One solution: (3, 8)",
            "No solution",
            "Infinite solutions",
            "One solution: (0, −1)"
          ],
          answer: "No solution",
          explanation: {
            steps: [
              "Since both equations are solved for y, set them equal.",
              "3x − 1 = 3x + 5.",
              "Subtract 3x: −1 = 5.",
              "This is a contradiction — false statement.",
              "No solution (the lines are parallel)."
            ],
            tip: "Getting a false statement (like −1 = 5) means no solution — the lines are parallel."
          }
        },
        {
          id: "ss-9",
          type: "fill-in",
          question: "Solve by substitution: 2x + y = 7 and y = x + 1. What is x?",
          answer: "2",
          explanation: {
            steps: [
              "y is isolated: y = x + 1.",
              "Substitute into 2x + y = 7: 2x + (x + 1) = 7.",
              "3x + 1 = 7.",
              "3x = 6.",
              "x = 2."
            ],
            tip: "Substitute y = x + 1 into the other equation and solve."
          }
        },
        {
          id: "ss-10",
          type: "fill-in",
          question: "Solve by substitution: 2x + y = 7 and y = x + 1. What is y? (Use x = 2.)",
          answer: "3",
          explanation: {
            steps: [
              "x = 2. Substitute into y = x + 1.",
              "y = 2 + 1 = 3.",
              "Solution: (2, 3).",
              "Check: 2(2) + 3 = 4 + 3 = 7. ✓"
            ],
            tip: "Always verify your answer in both original equations."
          }
        }
      ],
      guide: {
        concept: "Substitution involves isolating one variable, substituting that expression into the other equation, solving, and then back-substituting. It's most efficient when a variable is already isolated.",
        examples: [
          {
            problem: "Solve: y = 3x − 2 and x + y = 6.",
            steps: [
              "y is isolated: y = 3x − 2.",
              "Substitute: x + (3x − 2) = 6.",
              "4x − 2 = 6 → 4x = 8 → x = 2.",
              "Back-substitute: y = 3(2) − 2 = 4.",
              "Solution: (2, 4)."
            ],
            answer: "(2, 4)"
          }
        ],
        tips: [
          "Choose the equation that's easiest to solve for a variable.",
          "If you get 0 = 0: infinite solutions. If you get 3 = 7: no solution.",
          "Always check your answer in both original equations."
        ],
        commonMistakes: [
          "Substituting back into the modified equation instead of an original.",
          "Forgetting to distribute when substituting an expression with multiple terms.",
          "Stopping after finding x — always find y too."
        ]
      }
    },
    {
      id: "systems-elimination",
      title: "Solving by Elimination",
      flashcards: [
        {
          front: "What are the steps for solving by elimination?",
          back: "1) Line up equations. 2) Add or subtract to eliminate one variable. 3) Solve for the remaining variable. 4) Substitute back to find the other variable. 5) Check. Example: 2x + y = 7 and x − y = 2 → add: 3x = 9 → x = 3."
        },
        {
          front: "How do you add equations to eliminate a variable?",
          back: "When the same variable has opposite coefficients (+n and −n), add the equations — the variable cancels. Example: 2x + y = 7 and x − y = 2: y and −y cancel → 3x = 9."
        },
        {
          front: "How do you create opposite coefficients?",
          back: "Multiply one or both equations by a constant so that the coefficients of one variable are opposites. Example: to eliminate x from x + y = 4 and 2x + y = 7, multiply the first by −2: −2x − 2y = −8 and 2x + y = 7 → add."
        },
        {
          front: "How do you choose which variable to eliminate?",
          back: "Pick whichever variable is easier to cancel — look for equal or easily-made-opposite coefficients. Example: 3x + 2y = 12 and 3x − y = 6 — x has coefficient 3 in both, so subtract to eliminate x."
        },
        {
          front: "When should you use elimination vs substitution?",
          back: "Use elimination when neither variable is isolated and the coefficients line up nicely. Use substitution when a variable is already isolated. Both give the same answer."
        },
        {
          front: "What does it mean if elimination gives 0 = 0?",
          back: "Getting 0 = 0 means the equations are the same line — the system has infinite solutions."
        },
        {
          front: "What does it mean if elimination gives 0 = 5?",
          back: "Getting a false equation like 0 = 5 means no solution — the lines are parallel."
        }
      ],
      problems: [
        {
          id: "se-1",
          type: "fill-in",
          question: "Solve by elimination:\n2x + y = 7\nx − y = 2\nWhat is x?",
          answer: "3",
          explanation: {
            steps: [
              "Align the equations: 2x + y = 7 and x − y = 2.",
              "Add the equations: (2x + x) + (y − y) = 7 + 2.",
              "3x + 0 = 9.",
              "x = 3."
            ],
            tip: "y and −y are opposites — they cancel when you add the equations."
          }
        },
        {
          id: "se-2",
          type: "fill-in",
          question: "Using x = 3 from the previous problem (2x + y = 7, x − y = 2), what is y?",
          answer: "1",
          explanation: {
            steps: [
              "Substitute x = 3 into 2x + y = 7.",
              "2(3) + y = 7.",
              "6 + y = 7.",
              "y = 1.",
              "Solution: (3, 1). Check: 3 − 1 = 2. ✓"
            ],
            tip: "Substitute x into the simpler equation to find y."
          }
        },
        {
          id: "se-3",
          type: "fill-in",
          question: "Solve by elimination:\n3x + 2y = 12\n3x − y = 6\nWhat is y?",
          answer: "2",
          explanation: {
            steps: [
              "The x-coefficients are both 3. Subtract equation 2 from equation 1.",
              "(3x + 2y) − (3x − y) = 12 − 6.",
              "3x − 3x + 2y + y = 6.",
              "3y = 6.",
              "y = 2."
            ],
            tip: "Subtract when coefficients are equal (not opposite)."
          }
        },
        {
          id: "se-4",
          type: "fill-in",
          question: "Using y = 2 from the previous problem (3x + 2y = 12, 3x − y = 6), what is x?",
          answer: "8/3",
          explanation: {
            steps: [
              "Substitute y = 2 into 3x + 2y = 12.",
              "3x + 2(2) = 12.",
              "3x + 4 = 12.",
              "3x = 8.",
              "x = 8/3."
            ],
            tip: "Solutions can be fractions — that's valid."
          }
        },
        {
          id: "se-5",
          type: "fill-in",
          question: "Solve by elimination:\n2x + 3y = 11\n4x − 3y = 13\nWhat is x?",
          answer: "4",
          explanation: {
            steps: [
              "3y and −3y are opposite coefficients.",
              "Add the equations: (2x + 4x) + (3y − 3y) = 11 + 13.",
              "6x = 24.",
              "x = 4."
            ],
            tip: "3y and −3y cancel perfectly — just add the equations."
          }
        },
        {
          id: "se-6",
          type: "fill-in",
          question: "Using x = 4 from the previous problem (2x + 3y = 11, 4x − 3y = 13), what is y?",
          answer: "1",
          explanation: {
            steps: [
              "Substitute x = 4 into 2x + 3y = 11.",
              "2(4) + 3y = 11.",
              "8 + 3y = 11.",
              "3y = 3.",
              "y = 1.",
              "Solution: (4, 1). Check: 4(4) − 3(1) = 16 − 3 = 13. ✓"
            ],
            tip: "Verify by checking in the equation you didn't use to find y."
          }
        },
        {
          id: "se-7",
          type: "multiple-choice",
          question: "To solve x + 2y = 5 and 2x + 3y = 8 by elimination, what should you multiply the first equation by to eliminate x?",
          choices: ["−2", "2", "3", "−3"],
          answer: "−2",
          explanation: {
            steps: [
              "The first equation has x coefficient 1; the second has 2.",
              "Multiply the first equation by −2: −2(x + 2y) = −2(5) → −2x − 4y = −10.",
              "Now add to 2x + 3y = 8: (−2x + 2x) + (−4y + 3y) = −10 + 8.",
              "−y = −2 → y = 2."
            ],
            tip: "To eliminate a variable, multiply so that the coefficients become exact opposites."
          }
        },
        {
          id: "se-8",
          type: "fill-in",
          question: "Solve x + 2y = 5 and 2x + 3y = 8 by elimination. What is y?",
          answer: "2",
          explanation: {
            steps: [
              "Multiply equation 1 by −2: −2x − 4y = −10.",
              "Add to equation 2: (−2x + 2x) + (−4y + 3y) = −10 + 8.",
              "−y = −2.",
              "y = 2."
            ],
            tip: "After eliminating x, solve the simple one-variable equation."
          }
        },
        {
          id: "se-9",
          type: "fill-in",
          question: "Using y = 2 from the previous problem (x + 2y = 5, 2x + 3y = 8), what is x?",
          answer: "1",
          explanation: {
            steps: [
              "Substitute y = 2 into x + 2y = 5.",
              "x + 2(2) = 5.",
              "x + 4 = 5.",
              "x = 1.",
              "Solution: (1, 2). Check: 2(1) + 3(2) = 2 + 6 = 8. ✓"
            ],
            tip: "Use the simpler equation to find x."
          }
        },
        {
          id: "se-10",
          type: "multiple-choice",
          question: "Solve by elimination: 3x + y = 9 and 3x + y = 12.",
          choices: ["(3, 0)", "(0, 9)", "No solution", "Infinite solutions"],
          answer: "No solution",
          explanation: {
            steps: [
              "Subtract equation 1 from equation 2: (3x − 3x) + (y − y) = 12 − 9.",
              "0 = 3.",
              "This is a contradiction — false.",
              "No solution — the lines are parallel."
            ],
            tip: "When elimination gives a false statement (0 = 3), the system has no solution."
          }
        }
      ],
      guide: {
        concept: "Elimination adds (or subtracts) two equations to cancel out one variable. If the coefficients don't already cancel, multiply one or both equations first. It's great when coefficients line up neatly.",
        examples: [
          {
            problem: "Solve: 3x + 2y = 14 and 3x − 2y = 4.",
            steps: [
              "2y and −2y are opposites — add the equations.",
              "6x = 18 → x = 3.",
              "Substitute x = 3 into 3x + 2y = 14: 9 + 2y = 14 → 2y = 5 → y = 5/2.",
              "Solution: (3, 5/2)."
            ],
            answer: "(3, 5/2)"
          }
        ],
        tips: [
          "Add when coefficients are opposites (+n and −n).",
          "Subtract when coefficients are equal.",
          "Multiply to create opposite coefficients when needed.",
          "0 = 0: infinite solutions. 0 = (nonzero): no solution."
        ],
        commonMistakes: [
          "Forgetting to multiply ALL terms in an equation — not just the variable term.",
          "Adding instead of subtracting when coefficients are equal (not opposite).",
          "Not checking the solution in both original equations."
        ]
      }
    }
  ]
};

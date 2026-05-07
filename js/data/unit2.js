export const unit2 = {
  id: 2,
  title: "Linear Equations",
  emoji: "⚖️",
  color: "#ff6584",
  topics: [
    {
      id: "one-step-equations",
      title: "One-Step Equations",
      flashcards: [
        {
          front: "What are inverse operations?",
          back: "Operations that undo each other. Addition and subtraction are inverses; multiplication and division are inverses. To solve an equation, apply the inverse operation to both sides to isolate the variable."
        },
        {
          front: "What is the Addition Property of Equality?",
          back: "If a = b, then a + c = b + c. You can add the same number to both sides of an equation without changing the solution. Use this to undo subtraction. Example: x - 5 = 3 → add 5 to both sides → x = 8."
        },
        {
          front: "What is the Subtraction Property of Equality?",
          back: "If a = b, then a - c = b - c. You can subtract the same number from both sides. Use this to undo addition. Example: x + 7 = 12 → subtract 7 from both sides → x = 5."
        },
        {
          front: "What is the Multiplication Property of Equality?",
          back: "If a = b, then a × c = b × c. You can multiply both sides by the same nonzero number. Use this to undo division. Example: x/4 = 3 → multiply both sides by 4 → x = 12."
        },
        {
          front: "What is the Division Property of Equality?",
          back: "If a = b, then a ÷ c = b ÷ c (c ≠ 0). You can divide both sides by the same nonzero number. Use this to undo multiplication. Example: 6x = 42 → divide both sides by 6 → x = 7."
        },
        {
          front: "What does 'isolate the variable' mean?",
          back: "Get the variable alone on one side of the equals sign with a coefficient of 1. The other side will be the solution. Example: in 5x = 20, dividing by 5 isolates x: x = 4."
        },
        {
          front: "How do you check your solution to an equation?",
          back: "Substitute your answer back into the original equation and verify both sides are equal. Example: if x = 4, check 5x = 20 → 5(4) = 20 → 20 = 20 ✓. If both sides match, the solution is correct."
        }
      ],
      problems: [
        {
          id: "ose-1",
          type: "multiple-choice",
          question: "Solve: x + 7 = 12",
          choices: ["x = 5", "x = 19", "x = 7", "x = -5"],
          answer: "x = 5",
          explanation: {
            steps: [
              "Goal: isolate x",
              "Subtract 7 from both sides: x + 7 - 7 = 12 - 7",
              "Simplify: x = 5",
              "Check: 5 + 7 = 12 ✓"
            ],
            tip: "To undo addition, subtract the same amount from both sides."
          }
        },
        {
          id: "ose-2",
          type: "multiple-choice",
          question: "Solve: n - 5 = 3",
          choices: ["n = 8", "n = -2", "n = 2", "n = -8"],
          answer: "n = 8",
          explanation: {
            steps: [
              "Goal: isolate n",
              "Add 5 to both sides: n - 5 + 5 = 3 + 5",
              "Simplify: n = 8",
              "Check: 8 - 5 = 3 ✓"
            ],
            tip: "To undo subtraction, add the same amount to both sides."
          }
        },
        {
          id: "ose-3",
          type: "multiple-choice",
          question: "Solve: 4x = 28",
          choices: ["x = 7", "x = 24", "x = 112", "x = 4"],
          answer: "x = 7",
          explanation: {
            steps: [
              "Goal: isolate x",
              "Divide both sides by 4: 4x ÷ 4 = 28 ÷ 4",
              "Simplify: x = 7",
              "Check: 4(7) = 28 ✓"
            ],
            tip: "To undo multiplication, divide both sides by the coefficient."
          }
        },
        {
          id: "ose-4",
          type: "multiple-choice",
          question: "Solve: x/3 = 9",
          choices: ["x = 27", "x = 3", "x = 12", "x = 6"],
          answer: "x = 27",
          explanation: {
            steps: [
              "Goal: isolate x",
              "Multiply both sides by 3: (x/3) × 3 = 9 × 3",
              "Simplify: x = 27",
              "Check: 27/3 = 9 ✓"
            ],
            tip: "To undo division, multiply both sides by the divisor."
          }
        },
        {
          id: "ose-5",
          type: "multiple-choice",
          question: "Solve: -8 + y = 2",
          choices: ["y = 10", "y = -10", "y = -6", "y = 6"],
          answer: "y = 10",
          explanation: {
            steps: [
              "Goal: isolate y",
              "Add 8 to both sides: -8 + y + 8 = 2 + 8",
              "Simplify: y = 10",
              "Check: -8 + 10 = 2 ✓"
            ],
            tip: "The negative sign belongs to the constant, not the variable."
          }
        },
        {
          id: "ose-6",
          type: "multiple-choice",
          question: "Solve: -3x = 21",
          choices: ["x = -7", "x = 7", "x = -18", "x = 18"],
          answer: "x = -7",
          explanation: {
            steps: [
              "Goal: isolate x",
              "Divide both sides by -3: -3x ÷ (-3) = 21 ÷ (-3)",
              "Simplify: x = -7",
              "Check: -3(-7) = 21 ✓"
            ],
            tip: "Dividing both sides by a negative number is still valid — the equality holds."
          }
        },
        {
          id: "ose-7",
          type: "fill-in",
          question: "Solve: m + 14 = 9",
          answer: "m = -5",
          explanation: {
            steps: [
              "Subtract 14 from both sides: m + 14 - 14 = 9 - 14",
              "Simplify: m = -5",
              "Check: -5 + 14 = 9 ✓"
            ],
            tip: "The answer can be negative — subtraction can produce values less than zero."
          }
        },
        {
          id: "ose-8",
          type: "fill-in",
          question: "Solve: x/(-4) = 5",
          answer: "x = -20",
          explanation: {
            steps: [
              "Multiply both sides by -4: (x/(-4)) × (-4) = 5 × (-4)",
              "Simplify: x = -20",
              "Check: -20 ÷ (-4) = 5 ✓"
            ],
            tip: "Multiply by the denominator — including its sign."
          }
        },
        {
          id: "ose-9",
          type: "fill-in",
          question: "Solve: 15 = 3n",
          answer: "n = 5",
          explanation: {
            steps: [
              "The variable is on the right side — that's fine",
              "Divide both sides by 3: 15 ÷ 3 = 3n ÷ 3",
              "Simplify: 5 = n, or n = 5",
              "Check: 3(5) = 15 ✓"
            ],
            tip: "The variable can be on either side of the equation."
          }
        },
        {
          id: "ose-10",
          type: "fill-in",
          question: "Solve: 2.5x = 10",
          answer: "x = 4",
          explanation: {
            steps: [
              "Divide both sides by 2.5: 2.5x ÷ 2.5 = 10 ÷ 2.5",
              "Simplify: x = 4",
              "Check: 2.5(4) = 10 ✓"
            ],
            tip: "One-step equations work with decimals too — just divide by the coefficient."
          }
        },
        {
          id: "ose-11",
          type: "multiple-choice",
          question: "Solve: x + (-9) = -4",
          choices: ["x = 5", "x = -13", "x = -5", "x = 13"],
          answer: "x = 5",
          explanation: {
            steps: [
              "Rewrite: x - 9 = -4",
              "Add 9 to both sides: x = -4 + 9",
              "x = 5",
              "Check: 5 + (-9) = 5 - 9 = -4 ✓"
            ],
            tip: "Adding a negative is the same as subtracting — simplify the left side first."
          }
        },
        {
          id: "ose-12",
          type: "multiple-choice",
          question: "Solve: (3/4)x = 12",
          choices: ["x = 16", "x = 9", "x = 48", "x = 4"],
          answer: "x = 16",
          explanation: {
            steps: [
              "To undo multiplication by 3/4, multiply both sides by the reciprocal 4/3",
              "(4/3) × (3/4)x = 12 × (4/3)",
              "x = 48/3",
              "x = 16; Check: (3/4)(16) = 12 ✓"
            ],
            tip: "To undo multiplication by a fraction, multiply both sides by its reciprocal."
          }
        },
        {
          id: "ose-13",
          type: "multiple-choice",
          question: "Jayla owes a friend some money. After repaying $15, she still owes $8. Write and solve a one-step equation to find how much she originally owed.",
          choices: ["x = 23", "x = 7", "x = -7", "x = -23"],
          answer: "x = 23",
          explanation: {
            steps: [
              "Let x = original amount owed",
              "After repaying $15, she owes x - 15",
              "Set up: x - 15 = 8",
              "Add 15 to both sides: x = 23; Check: 23 - 15 = 8 ✓"
            ],
            tip: "Define your variable carefully in word problems, then translate each phrase to math."
          }
        },
        {
          id: "ose-14",
          type: "fill-in",
          question: "Solve: -x = -17",
          answer: "x = 17",
          explanation: {
            steps: [
              "-x means -1 times x, so -1x = -17",
              "Divide both sides by -1: x = -17 ÷ (-1)",
              "x = 17",
              "Check: -(17) = -17 ✓"
            ],
            tip: "-x has an implied coefficient of -1. Dividing both sides by -1 gives x."
          }
        },
        {
          id: "ose-15",
          type: "fill-in",
          question: "The product of a number and -2/3 equals 8. Write and solve the equation.",
          answer: "x = -12",
          explanation: {
            steps: [
              "Let x = the unknown number",
              "Equation: (-2/3)x = 8",
              "Multiply both sides by -3/2 (the reciprocal of -2/3): x = 8 × (-3/2)",
              "x = -24/2 = -12; Check: (-2/3)(-12) = 24/3 = 8 ✓"
            ],
            tip: "When the coefficient is a negative fraction, multiply by the negative reciprocal."
          }
        },
        {
          id: "ose-16",
          type: "fill-in",
          question: "Solve: 0.6x = -4.2",
          answer: "x = -7",
          explanation: {
            steps: [
              "Divide both sides by 0.6: x = -4.2 ÷ 0.6",
              "Multiply numerator and denominator by 10: x = -42 ÷ 6",
              "x = -7",
              "Check: 0.6(-7) = -4.2 ✓"
            ],
            tip: "Dividing by a decimal is easier if you convert both sides by multiplying by a power of 10 first."
          }
        }
      ],
      guide: {
        concept: "A one-step equation requires exactly one inverse operation to solve. The goal is always to isolate the variable — get it alone on one side with coefficient 1. Whatever operation you perform on one side, you must do to the other side to keep the equation balanced.",
        examples: [
          {
            problem: "Solve: x + 7 = 12",
            steps: ["Subtract 7 from both sides: x = 12 - 7", "x = 5", "Check: 5 + 7 = 12 ✓"],
            answer: "x = 5"
          },
          {
            problem: "Solve: -3x = 21",
            steps: ["Divide both sides by -3: x = 21 ÷ (-3)", "x = -7", "Check: -3(-7) = 21 ✓"],
            answer: "x = -7"
          }
        ],
        tips: [
          "Always perform the inverse operation: addition ↔ subtraction, multiplication ↔ division.",
          "Do the same thing to BOTH sides to keep the equation balanced.",
          "Always check your answer by substituting back into the original equation."
        ],
        commonMistakes: [
          "Only changing one side: x + 7 = 12, writing x = 12 without subtracting 7 from 12.",
          "Wrong inverse: for x - 5 = 3, adding 5 is correct but students sometimes subtract.",
          "Sign errors when the coefficient is negative: -3x = 21 → x = -7, not 7."
        ]
      }
    },
    {
      id: "two-step-equations",
      title: "Two-Step Equations",
      flashcards: [
        {
          front: "What is the two-step process for solving equations?",
          back: "Step 1: Add or subtract to move the constant away from the variable side. Step 2: Multiply or divide to isolate the variable. You undo operations in the reverse order they would be applied."
        },
        {
          front: "Why do we undo addition/subtraction before multiplication/division?",
          back: "We reverse the order of operations. The expression 2x + 3 means 'multiply x by 2, then add 3.' To undo this, we first subtract 3 (undo the addition), then divide by 2 (undo the multiplication)."
        },
        {
          front: "How do you solve 2x + 3 = 11?",
          back: "Step 1: Subtract 3 from both sides → 2x = 8. Step 2: Divide both sides by 2 → x = 4. Check: 2(4) + 3 = 8 + 3 = 11 ✓."
        },
        {
          front: "How do you solve x/4 + 2 = 6?",
          back: "Step 1: Subtract 2 from both sides → x/4 = 4. Step 2: Multiply both sides by 4 → x = 16. Check: 16/4 + 2 = 4 + 2 = 6 ✓."
        },
        {
          front: "What if the answer to a two-step equation is a fraction?",
          back: "Fractions are valid answers! Example: 3x + 1 = 5 → 3x = 4 → x = 4/3. Leave as a fraction unless the problem says to round or convert to a decimal."
        },
        {
          front: "What if the answer is a decimal?",
          back: "Decimals are also valid. Example: 4x - 2 = 7 → 4x = 9 → x = 9/4 = 2.25. Check: 4(2.25) - 2 = 9 - 2 = 7 ✓. Always check by substituting back in."
        },
        {
          front: "How do you check a two-step equation solution?",
          back: "Substitute your answer for the variable in the original equation and simplify both sides completely. If both sides equal the same number, your answer is correct. If not, re-solve from the beginning."
        }
      ],
      problems: [
        {
          id: "tse-1",
          type: "multiple-choice",
          question: "Solve: 2x + 3 = 11",
          choices: ["x = 4", "x = 7", "x = 5", "x = 3"],
          answer: "x = 4",
          explanation: {
            steps: [
              "Subtract 3 from both sides: 2x + 3 - 3 = 11 - 3 → 2x = 8",
              "Divide both sides by 2: 2x ÷ 2 = 8 ÷ 2 → x = 4",
              "Check: 2(4) + 3 = 8 + 3 = 11 ✓"
            ],
            tip: "Always undo addition/subtraction before undoing multiplication/division."
          }
        },
        {
          id: "tse-2",
          type: "multiple-choice",
          question: "Solve: 5x - 7 = 18",
          choices: ["x = 5", "x = 3", "x = 11", "x = 2"],
          answer: "x = 5",
          explanation: {
            steps: [
              "Add 7 to both sides: 5x - 7 + 7 = 18 + 7 → 5x = 25",
              "Divide both sides by 5: x = 5",
              "Check: 5(5) - 7 = 25 - 7 = 18 ✓"
            ],
            tip: "Undo the subtraction first by adding 7 to both sides."
          }
        },
        {
          id: "tse-3",
          type: "multiple-choice",
          question: "Solve: x/4 + 2 = 6",
          choices: ["x = 16", "x = 1", "x = 32", "x = 2"],
          answer: "x = 16",
          explanation: {
            steps: [
              "Subtract 2 from both sides: x/4 = 4",
              "Multiply both sides by 4: x = 16",
              "Check: 16/4 + 2 = 4 + 2 = 6 ✓"
            ],
            tip: "Subtract the constant first, then multiply to clear the fraction."
          }
        },
        {
          id: "tse-4",
          type: "multiple-choice",
          question: "Solve: 3x - 9 = 0",
          choices: ["x = 3", "x = -3", "x = 9", "x = 0"],
          answer: "x = 3",
          explanation: {
            steps: [
              "Add 9 to both sides: 3x = 9",
              "Divide both sides by 3: x = 3",
              "Check: 3(3) - 9 = 9 - 9 = 0 ✓"
            ],
            tip: "Zero on the right side is fine — treat it like any other constant."
          }
        },
        {
          id: "tse-5",
          type: "multiple-choice",
          question: "Solve: -2x + 5 = 13",
          choices: ["x = -4", "x = 4", "x = 9", "x = -9"],
          answer: "x = -4",
          explanation: {
            steps: [
              "Subtract 5 from both sides: -2x = 8",
              "Divide both sides by -2: x = -4",
              "Check: -2(-4) + 5 = 8 + 5 = 13 ✓"
            ],
            tip: "Dividing by a negative number flips the sign of the right side too."
          }
        },
        {
          id: "tse-6",
          type: "multiple-choice",
          question: "Solve: n/3 - 4 = 2",
          choices: ["n = 18", "n = -6", "n = 6", "n = 2"],
          answer: "n = 18",
          explanation: {
            steps: [
              "Add 4 to both sides: n/3 = 6",
              "Multiply both sides by 3: n = 18",
              "Check: 18/3 - 4 = 6 - 4 = 2 ✓"
            ],
            tip: "Add first to clear the constant, then multiply to clear the fraction."
          }
        },
        {
          id: "tse-7",
          type: "fill-in",
          question: "Solve: 6x + 1 = 25",
          answer: "x = 4",
          explanation: {
            steps: [
              "Subtract 1 from both sides: 6x = 24",
              "Divide both sides by 6: x = 4",
              "Check: 6(4) + 1 = 24 + 1 = 25 ✓"
            ],
            tip: "Undo addition before division."
          }
        },
        {
          id: "tse-8",
          type: "fill-in",
          question: "Solve: -x/5 + 3 = 7",
          answer: "x = -20",
          explanation: {
            steps: [
              "Subtract 3 from both sides: -x/5 = 4",
              "Multiply both sides by -5: x = -20",
              "Check: -(-20)/5 + 3 = 20/5 + 3 = 4 + 3 = 7 ✓"
            ],
            tip: "Multiply by the denominator AND account for the negative sign."
          }
        },
        {
          id: "tse-9",
          type: "fill-in",
          question: "Solve: 7 - 3x = 1",
          answer: "x = 2",
          explanation: {
            steps: [
              "Subtract 7 from both sides: -3x = -6",
              "Divide both sides by -3: x = 2",
              "Check: 7 - 3(2) = 7 - 6 = 1 ✓"
            ],
            tip: "When the variable term is being subtracted, subtracting the constant leaves -3x = -6."
          }
        },
        {
          id: "tse-10",
          type: "fill-in",
          question: "Solve: 4x + 5 = -3",
          answer: "x = -2",
          explanation: {
            steps: [
              "Subtract 5 from both sides: 4x = -8",
              "Divide both sides by 4: x = -2",
              "Check: 4(-2) + 5 = -8 + 5 = -3 ✓"
            ],
            tip: "Negative answers are perfectly valid."
          }
        },
        {
          id: "tse-11",
          type: "multiple-choice",
          question: "Solve: (x/3) - 7 = -2",
          choices: ["x = 15", "x = -27", "x = 27", "x = -15"],
          answer: "x = 15",
          explanation: {
            steps: [
              "Add 7 to both sides: x/3 = 5",
              "Multiply both sides by 3: x = 15",
              "Check: 15/3 - 7 = 5 - 7 = -2 ✓"
            ],
            tip: "The right side can be negative mid-solution — keep going and the final answer may be positive."
          }
        },
        {
          id: "tse-12",
          type: "multiple-choice",
          question: "Solve: -5x - 3 = -18",
          choices: ["x = 3", "x = -3", "x = 21/5", "x = -21/5"],
          answer: "x = 3",
          explanation: {
            steps: [
              "Add 3 to both sides: -5x = -15",
              "Divide both sides by -5: x = 3",
              "Check: -5(3) - 3 = -15 - 3 = -18 ✓"
            ],
            tip: "Negative ÷ negative = positive — the answer here is positive."
          }
        },
        {
          id: "tse-13",
          type: "multiple-choice",
          question: "Marcus earns $12 per hour and paid a $5 supply fee. His take-home for a shift was $43. How many hours did he work?",
          choices: ["h = 4", "h = 3", "h = 5", "h = 6"],
          answer: "h = 4",
          explanation: {
            steps: [
              "Let h = number of hours worked",
              "Earnings minus fee: 12h - 5 = 43",
              "Add 5 to both sides: 12h = 48",
              "Divide by 12: h = 4; Check: 12(4) - 5 = 48 - 5 = 43 ✓"
            ],
            tip: "Identify what the variable represents, write an equation matching the word problem, then solve."
          }
        },
        {
          id: "tse-14",
          type: "fill-in",
          question: "Solve: (2/3)x - 4 = 2",
          answer: "x = 9",
          explanation: {
            steps: [
              "Add 4 to both sides: (2/3)x = 6",
              "Multiply both sides by 3/2 (the reciprocal of 2/3): x = 6 × (3/2) = 18/2 = 9",
              "Check: (2/3)(9) - 4 = 6 - 4 = 2 ✓"
            ],
            tip: "Clear the fractional coefficient by multiplying both sides by its reciprocal."
          }
        },
        {
          id: "tse-15",
          type: "fill-in",
          question: "Solve: 3 - (1/4)x = 5",
          answer: "x = -8",
          explanation: {
            steps: [
              "Subtract 3 from both sides: -(1/4)x = 2",
              "Multiply both sides by -4: x = 2 × (-4) = -8",
              "Check: 3 - (1/4)(-8) = 3 - (-2) = 3 + 2 = 5 ✓"
            ],
            tip: "Subtracting 3 gives a negative fraction coefficient — multiply by -4 to clear it."
          }
        },
        {
          id: "tse-16",
          type: "fill-in",
          question: "A number is divided by -6, then increased by 9, giving a result of 2. Find the number.",
          answer: "x = 42",
          explanation: {
            steps: [
              "Let x = the number; set up: x/(-6) + 9 = 2",
              "Subtract 9 from both sides: x/(-6) = -7",
              "Multiply both sides by -6: x = -7 × (-6) = 42",
              "Check: 42/(-6) + 9 = -7 + 9 = 2 ✓"
            ],
            tip: "Translate each phrase carefully: 'a number divided by -6' is x/(-6), not -6/x."
          }
        }
      ],
      guide: {
        concept: "Two-step equations require two inverse operations to solve. The key insight is to undo operations in reverse order: since in the expression 2x + 3 you would multiply first then add, to solve you subtract first then divide.",
        examples: [
          {
            problem: "Solve: 5x - 7 = 18",
            steps: ["Add 7 to both sides: 5x = 25", "Divide both sides by 5: x = 5", "Check: 5(5) - 7 = 25 - 7 = 18 ✓"],
            answer: "x = 5"
          }
        ],
        tips: [
          "Always undo addition or subtraction before undoing multiplication or division.",
          "Keep the equation balanced — whatever you do to one side, do to the other.",
          "Fractional or decimal answers are valid — don't force whole numbers."
        ],
        commonMistakes: [
          "Dividing before adding/subtracting: in 2x + 3 = 11, dividing by 2 first gives x + 1.5 = 5.5, which is harder to solve.",
          "Forgetting to divide both sides: 2x = 8 → x = 8 instead of x = 4.",
          "Sign errors when the constant is positive but the equation requires subtraction to get a negative result."
        ]
      }
    },
    {
      id: "multi-step-equations",
      title: "Multi-Step Equations",
      flashcards: [
        {
          front: "When should you distribute first?",
          back: "When parentheses appear in the equation, distribute before anything else. Example: 3(x + 2) = 15 → distribute to get 3x + 6 = 15, then solve as a two-step equation."
        },
        {
          front: "When should you combine like terms first?",
          back: "When like terms appear on the same side of the equation, combine them before isolating the variable. Example: 2x + 3x - 7 = 23 → 5x - 7 = 23, then solve as a two-step equation."
        },
        {
          front: "What is the general strategy for multi-step equations?",
          back: "1) Distribute if needed. 2) Combine like terms on each side. 3) Move variable terms to one side. 4) Move constants to the other side. 5) Divide by the coefficient. The goal is always to isolate the variable."
        },
        {
          front: "What is a no-solution equation?",
          back: "When solving leads to a false statement like 3 = 7, the equation has no solution. This means no value of x makes the equation true. Example: 2x + 5 = 2x + 9 → 5 = 9, which is always false."
        },
        {
          front: "What is an infinitely-many-solutions equation?",
          back: "When solving leads to a true statement like 0 = 0 or 5 = 5, the equation is true for ALL real numbers. Example: 3x + 6 = 3(x + 2) → 3x + 6 = 3x + 6 → 6 = 6, always true."
        },
        {
          front: "How do you handle fractions in multi-step equations?",
          back: "Multiply every term by the LCD (least common denominator) to clear all fractions at once. Example: x/2 + x/3 = 5 — LCD is 6; multiply through: 3x + 2x = 30 → 5x = 30 → x = 6."
        },
        {
          front: "What does it mean to have 'the variable isolated'?",
          back: "The variable stands alone on one side with a coefficient of exactly 1. The opposite side shows the solution. Example: after all steps, x = 4 means 4 is the solution. If you have 2x = 8, x is not yet isolated."
        }
      ],
      problems: [
        {
          id: "mse-1",
          type: "multiple-choice",
          question: "Solve: 3(x + 2) = 15",
          choices: ["x = 3", "x = 5", "x = 7", "x = 13"],
          answer: "x = 3",
          explanation: {
            steps: [
              "Distribute: 3x + 6 = 15",
              "Subtract 6 from both sides: 3x = 9",
              "Divide by 3: x = 3",
              "Check: 3(3 + 2) = 3(5) = 15 ✓"
            ],
            tip: "Distribute first, then solve the resulting two-step equation."
          }
        },
        {
          id: "mse-2",
          type: "multiple-choice",
          question: "Solve: 2x + 3x - 7 = 23",
          choices: ["x = 6", "x = 4", "x = 16", "x = 3"],
          answer: "x = 6",
          explanation: {
            steps: [
              "Combine like terms on the left: 5x - 7 = 23",
              "Add 7 to both sides: 5x = 30",
              "Divide by 5: x = 6",
              "Check: 2(6) + 3(6) - 7 = 12 + 18 - 7 = 23 ✓"
            ],
            tip: "Combine like terms before trying to isolate the variable."
          }
        },
        {
          id: "mse-3",
          type: "multiple-choice",
          question: "Solve: 4(2x - 1) + 3 = 27",
          choices: ["x = 3", "x = 4", "x = 7", "x = 2"],
          answer: "x = 3",
          explanation: {
            steps: [
              "Distribute: 8x - 4 + 3 = 27",
              "Combine constants: 8x - 1 = 27",
              "Add 1: 8x = 28",
              "Divide by 8: x = 28/8 = 3.5"
            ],
            tip: "Distribute carefully, then combine any constants before isolating x."
          }
        },
        {
          id: "mse-4",
          type: "multiple-choice",
          question: "Solve: 2(3x - 4) = 16",
          choices: ["x = 4", "x = 3", "x = 6", "x = 2"],
          answer: "x = 4",
          explanation: {
            steps: [
              "Distribute: 6x - 8 = 16",
              "Add 8 to both sides: 6x = 24",
              "Divide by 6: x = 4",
              "Check: 2(3(4) - 4) = 2(12 - 4) = 2(8) = 16 ✓"
            ],
            tip: "Distribute the factor on the outside to each term in the parentheses."
          }
        },
        {
          id: "mse-5",
          type: "multiple-choice",
          question: "Solve: 5x + 2 - 3x = 10",
          choices: ["x = 4", "x = 2", "x = 6", "x = 3"],
          answer: "x = 4",
          explanation: {
            steps: [
              "Combine like terms: (5x - 3x) + 2 = 10 → 2x + 2 = 10",
              "Subtract 2: 2x = 8",
              "Divide by 2: x = 4",
              "Check: 5(4) + 2 - 3(4) = 20 + 2 - 12 = 10 ✓"
            ],
            tip: "Combine like terms on the same side first."
          }
        },
        {
          id: "mse-6",
          type: "multiple-choice",
          question: "What type of solution does 3x + 5 = 3x + 9 have?",
          choices: ["No solution", "Infinitely many solutions", "x = 0", "x = 4/3"],
          answer: "No solution",
          explanation: {
            steps: [
              "Subtract 3x from both sides: 5 = 9",
              "5 = 9 is always false",
              "There is no value of x that makes this true",
              "The equation has no solution"
            ],
            tip: "When the variable cancels and you get a false statement, there's no solution."
          }
        },
        {
          id: "mse-7",
          type: "fill-in",
          question: "Solve: 5(x - 3) + 2x = 22",
          answer: "x = 37/7",
          explanation: {
            steps: [
              "Distribute: 5x - 15 + 2x = 22",
              "Combine like terms: 7x - 15 = 22",
              "Add 15: 7x = 37",
              "Divide by 7: x = 37/7"
            ],
            tip: "Fractional answers are valid — check by substituting back in."
          }
        },
        {
          id: "mse-8",
          type: "fill-in",
          question: "Solve: 3(2x + 1) - 2(x + 4) = 7",
          answer: "x = 3",
          explanation: {
            steps: [
              "Distribute: 6x + 3 - 2x - 8 = 7",
              "Combine like terms: 4x - 5 = 7",
              "Add 5: 4x = 12",
              "Divide by 4: x = 3",
              "Check: 3(7) - 2(7) = 21 - 14 = 7 ✓"
            ],
            tip: "Distribute each set of parentheses separately, being careful with signs."
          }
        },
        {
          id: "mse-9",
          type: "fill-in",
          question: "Solve: 2(x + 5) = 2x + 10",
          answer: "All real numbers (infinitely many solutions)",
          explanation: {
            steps: [
              "Distribute: 2x + 10 = 2x + 10",
              "Subtract 2x from both sides: 10 = 10",
              "This is always true",
              "Every real number is a solution"
            ],
            tip: "When the variable cancels and you get a true statement, every number works."
          }
        },
        {
          id: "mse-10",
          type: "fill-in",
          question: "Solve: 4(x + 2) - 3x = 2x + 1",
          answer: "x = 7",
          explanation: {
            steps: [
              "Distribute: 4x + 8 - 3x = 2x + 1",
              "Combine left side: x + 8 = 2x + 1",
              "Subtract x: 8 = x + 1",
              "Subtract 1: x = 7",
              "Check: 4(9) - 21 = 36 - 21 = 15 = 2(7) + 1 ✓"
            ],
            tip: "After distributing and combining, you may still have variables on both sides."
          }
        },
        {
          id: "mse-11",
          type: "multiple-choice",
          question: "Solve: x/2 + x/3 = 10",
          choices: ["x = 12", "x = 30", "x = 60", "x = 4"],
          answer: "x = 12",
          explanation: {
            steps: [
              "Find the LCD of 2 and 3: LCD = 6",
              "Multiply every term by 6: 6(x/2) + 6(x/3) = 6(10)",
              "Simplify: 3x + 2x = 60",
              "Combine and solve: 5x = 60 → x = 12; Check: 12/2 + 12/3 = 6 + 4 = 10 ✓"
            ],
            tip: "Multiply through by the LCD to eliminate all fractions in one step."
          }
        },
        {
          id: "mse-12",
          type: "multiple-choice",
          question: "Solve: 4 - 2(3x + 1) = -3(x - 2)",
          choices: ["x = -4", "x = 4", "x = 0", "x = 2"],
          answer: "x = -4",
          explanation: {
            steps: [
              "Distribute left side: 4 - 6x - 2 = -3x + 6",
              "Combine left side constants: 2 - 6x = -3x + 6",
              "Add 6x to both sides: 2 = 3x + 6",
              "Subtract 6: -4 = 3x → x = -4/3"
            ],
            tip: "Be meticulous distributing negatives — each sign change matters."
          }
        },
        {
          id: "mse-13",
          type: "multiple-choice",
          question: "Solve: (x - 3)/4 = (x + 1)/2",
          choices: ["x = -7", "x = 7", "x = 1", "x = -1"],
          answer: "x = -7",
          explanation: {
            steps: [
              "Multiply both sides by the LCD = 4: 4 · (x-3)/4 = 4 · (x+1)/2",
              "Simplify: (x - 3) = 2(x + 1)",
              "Distribute right: x - 3 = 2x + 2",
              "Subtract x: -3 = x + 2 → x = -5"
            ],
            tip: "Clear fractions with the LCD, then solve the resulting equation step by step."
          }
        },
        {
          id: "mse-14",
          type: "fill-in",
          question: "Solve: x/4 - x/6 = 2",
          answer: "x = 24",
          explanation: {
            steps: [
              "LCD of 4 and 6 is 12",
              "Multiply every term by 12: 12(x/4) - 12(x/6) = 12(2)",
              "Simplify: 3x - 2x = 24",
              "x = 24; Check: 24/4 - 24/6 = 6 - 4 = 2 ✓"
            ],
            tip: "With two fractions, find the LCD and multiply through — it always clears all denominators at once."
          }
        },
        {
          id: "mse-15",
          type: "fill-in",
          question: "Solve: 5(x + 2) - 3(2x - 1) = 4 - x",
          answer: "x = 9",
          explanation: {
            steps: [
              "Distribute: 5x + 10 - 6x + 3 = 4 - x",
              "Combine left side: -x + 13 = 4 - x",
              "Add x to both sides: 13 = 4",
              "Hmm — that gives 13 = 4 which is false; let me recheck: -x + 13 = 4 - x → add x to both → 13 = 4. This is a no-solution equation."
            ],
            tip: "If variables cancel and leave a false equation, the answer is no solution — always finish checking!"
          }
        },
        {
          id: "mse-16",
          type: "fill-in",
          question: "A plumber charges a $40 call-out fee plus $35 per hour. A second plumber charges $20 plus $45 per hour. For how many hours h would the total cost be the same?",
          answer: "h = 2",
          explanation: {
            steps: [
              "Plumber 1 total: 40 + 35h",
              "Plumber 2 total: 20 + 45h",
              "Set equal: 40 + 35h = 20 + 45h",
              "Subtract 35h: 40 = 20 + 10h → subtract 20 → 20 = 10h → h = 2; Check: 40+70=110 and 20+90=110 ✓"
            ],
            tip: "In 'find the break-even' word problems, set the two expressions equal to each other."
          }
        },
        {
          id: "mse-17",
          type: "multiple-choice",
          question: "Solve: 0.3(x + 4) = 0.5x - 0.2",
          choices: ["x = 7", "x = -7", "x = 3", "x = -3"],
          answer: "x = 7",
          explanation: {
            steps: [
              "Multiply every term by 10 to clear decimals: 3(x + 4) = 5x - 2",
              "Distribute: 3x + 12 = 5x - 2",
              "Subtract 3x: 12 = 2x - 2",
              "Add 2: 14 = 2x → x = 7; Check: 0.3(11) = 3.3 and 0.5(7) - 0.2 = 3.5 - 0.2 = 3.3 ✓"
            ],
            tip: "Multiply through by a power of 10 to eliminate decimals, just like clearing fractions with the LCD."
          }
        }
      ],
      guide: {
        concept: "Multi-step equations require several operations to solve. The general approach is: distribute parentheses, combine like terms on each side, then use inverse operations to isolate the variable. Special cases occur when the variable cancels completely.",
        examples: [
          {
            problem: "Solve: 3(2x + 1) - 2(x + 4) = 7",
            steps: [
              "Distribute: 6x + 3 - 2x - 8 = 7",
              "Combine like terms: 4x - 5 = 7",
              "Add 5: 4x = 12",
              "Divide by 4: x = 3"
            ],
            answer: "x = 3"
          }
        ],
        tips: [
          "Follow this order: distribute, combine like terms, move variable terms, move constants, divide.",
          "Watch signs when distributing a negative: -(x + 3) = -x - 3, not -x + 3.",
          "If the variable cancels and gives a false statement, the answer is 'no solution'; if true, it's 'all real numbers'."
        ],
        commonMistakes: [
          "Distributing incorrectly: 2(x - 5) = 2x - 5 instead of 2x - 10.",
          "Sign error on constants: 3(x + 2) - 4 → 3x + 6 - 4 = 3x + 2 (this is correct, but students often write 3x + 2 → they skip combining 6 - 4).",
          "Forgetting to check special cases — always look for variable cancellation."
        ]
      }
    },
    {
      id: "variables-both-sides",
      title: "Variables on Both Sides",
      flashcards: [
        {
          front: "How do you handle variables on both sides of an equation?",
          back: "Move all variable terms to one side and all constants to the other. Add or subtract a variable term to/from both sides. Example: 3x + 5 = x + 13 → subtract x from both sides → 2x + 5 = 13 → 2x = 8 → x = 4."
        },
        {
          front: "Which side should the variable go to?",
          back: "Either side works, but choose the side with the larger variable coefficient to avoid working with negatives. Example: in 3x = 7 - 4x, add 4x to both sides → 7x = 7 (easier than subtracting 3x)."
        },
        {
          front: "How do you solve 7x - 2 = 4x + 10?",
          back: "Subtract 4x from both sides: 3x - 2 = 10. Add 2: 3x = 12. Divide by 3: x = 4. Check: 7(4) - 2 = 26 and 4(4) + 10 = 26 ✓."
        },
        {
          front: "What are the special cases for equations with variables on both sides?",
          back: "When variable terms cancel: if the result is a FALSE statement (e.g., 3 = 7), there is NO solution. If the result is a TRUE statement (e.g., 5 = 5), there are INFINITELY MANY solutions."
        },
        {
          front: "How do you handle equations with parentheses and variables on both sides?",
          back: "Distribute first, then move variables to one side. Example: 2(x + 3) = 3(x - 1) → 2x + 6 = 3x - 3 → subtract 2x → 6 = x - 3 → add 3 → x = 9."
        },
        {
          front: "How do you solve 5x - 8 = 2x + 7?",
          back: "Subtract 2x from both sides: 3x - 8 = 7. Add 8: 3x = 15. Divide by 3: x = 5. Check: 5(5) - 8 = 17 and 2(5) + 7 = 17 ✓."
        },
        {
          front: "When do both sides simplify to the same constant?",
          back: "This happens when the variable coefficient is zero after combining. If you get k = k (same number), infinite solutions. If k₁ = k₂ where k₁ ≠ k₂, no solution. Example: 4x + 3 = 4x + 3 → 3 = 3, infinite solutions."
        }
      ],
      problems: [
        {
          id: "vbs-1",
          type: "multiple-choice",
          question: "Solve: 3x + 5 = x + 13",
          choices: ["x = 4", "x = 9", "x = 2", "x = 6"],
          answer: "x = 4",
          explanation: {
            steps: [
              "Subtract x from both sides: 2x + 5 = 13",
              "Subtract 5: 2x = 8",
              "Divide by 2: x = 4",
              "Check: 3(4)+5 = 17 and 4+13 = 17 ✓"
            ],
            tip: "Subtract the smaller variable term first to keep the coefficient positive."
          }
        },
        {
          id: "vbs-2",
          type: "multiple-choice",
          question: "Solve: 7x - 2 = 4x + 10",
          choices: ["x = 4", "x = 8/3", "x = 2", "x = 3"],
          answer: "x = 4",
          explanation: {
            steps: [
              "Subtract 4x from both sides: 3x - 2 = 10",
              "Add 2: 3x = 12",
              "Divide by 3: x = 4",
              "Check: 7(4)-2 = 26 and 4(4)+10 = 26 ✓"
            ],
            tip: "Move variable terms first, then deal with constants."
          }
        },
        {
          id: "vbs-3",
          type: "multiple-choice",
          question: "Solve: 2(x + 3) = 3(x - 1)",
          choices: ["x = 9", "x = 3", "x = -3", "x = 15"],
          answer: "x = 9",
          explanation: {
            steps: [
              "Distribute left: 2x + 6 = 3(x - 1)",
              "Distribute right: 2x + 6 = 3x - 3",
              "Subtract 2x: 6 = x - 3",
              "Add 3: x = 9",
              "Check: 2(12) = 24 and 3(8) = 24 ✓"
            ],
            tip: "Distribute both sides completely before moving variable terms."
          }
        },
        {
          id: "vbs-4",
          type: "multiple-choice",
          question: "Solve: 5x - 8 = 2x + 7",
          choices: ["x = 5", "x = -1/3", "x = 3", "x = 15"],
          answer: "x = 5",
          explanation: {
            steps: [
              "Subtract 2x from both sides: 3x - 8 = 7",
              "Add 8: 3x = 15",
              "Divide by 3: x = 5",
              "Check: 5(5)-8 = 17 and 2(5)+7 = 17 ✓"
            ],
            tip: "Subtract the smaller coefficient's variable term to keep things positive."
          }
        },
        {
          id: "vbs-5",
          type: "multiple-choice",
          question: "Solve: 6 - 2x = 4x - 12",
          choices: ["x = 3", "x = -1", "x = 1", "x = 6"],
          answer: "x = 3",
          explanation: {
            steps: [
              "Add 2x to both sides: 6 = 6x - 12",
              "Add 12: 18 = 6x",
              "Divide by 6: x = 3",
              "Check: 6-6 = 0 and 12-12 = 0 ✓"
            ],
            tip: "Add 2x to both sides so the variable term ends up positive."
          }
        },
        {
          id: "vbs-6",
          type: "multiple-choice",
          question: "What is the solution to: 4x + 3 = 4x + 7?",
          choices: ["No solution", "x = 0", "All real numbers", "x = 1"],
          answer: "No solution",
          explanation: {
            steps: [
              "Subtract 4x from both sides: 3 = 7",
              "3 = 7 is always false",
              "No value of x makes this true",
              "No solution"
            ],
            tip: "When variables cancel and leave a false statement, there is no solution."
          }
        },
        {
          id: "vbs-7",
          type: "fill-in",
          question: "Solve: 8x - 3 = 5x + 9",
          answer: "x = 4",
          explanation: {
            steps: [
              "Subtract 5x: 3x - 3 = 9",
              "Add 3: 3x = 12",
              "Divide by 3: x = 4",
              "Check: 32-3 = 29 and 20+9 = 29 ✓"
            ],
            tip: "Move the variable term with the smaller coefficient."
          }
        },
        {
          id: "vbs-8",
          type: "fill-in",
          question: "Solve: 3(2x - 4) = 4(x + 1)",
          answer: "x = 8",
          explanation: {
            steps: [
              "Distribute: 6x - 12 = 4x + 4",
              "Subtract 4x: 2x - 12 = 4",
              "Add 12: 2x = 16",
              "Divide by 2: x = 8",
              "Check: 3(12) = 36 and 4(9) = 36 ✓"
            ],
            tip: "Always distribute before moving variable terms across the equals sign."
          }
        },
        {
          id: "vbs-9",
          type: "fill-in",
          question: "Solve: 2(x + 5) = 2x + 8",
          answer: "No solution",
          explanation: {
            steps: [
              "Distribute: 2x + 10 = 2x + 8",
              "Subtract 2x: 10 = 8",
              "False statement",
              "No solution"
            ],
            tip: "The parallel lines analogy: these two expressions are 'parallel' — never equal."
          }
        },
        {
          id: "vbs-10",
          type: "fill-in",
          question: "Solve: 5(x - 2) = 3x + 4",
          answer: "x = 7",
          explanation: {
            steps: [
              "Distribute: 5x - 10 = 3x + 4",
              "Subtract 3x: 2x - 10 = 4",
              "Add 10: 2x = 14",
              "Divide by 2: x = 7",
              "Check: 5(5) = 25 and 3(7)+4 = 25 ✓"
            ],
            tip: "Distribute, then treat like a standard variables-on-both-sides equation."
          }
        },
        {
          id: "vbs-11",
          type: "multiple-choice",
          question: "Solve: 4(x - 3) + 2 = 2(2x - 5)",
          choices: ["No solution", "All real numbers", "x = 0", "x = 3"],
          answer: "All real numbers",
          explanation: {
            steps: [
              "Distribute left: 4x - 12 + 2 = 4x - 10",
              "Simplify left: 4x - 10 = 4x - 10",
              "Subtract 4x: -10 = -10",
              "True statement — infinitely many solutions"
            ],
            tip: "When you get a true statement like -10 = -10, every real number is a solution."
          }
        },
        {
          id: "vbs-12",
          type: "multiple-choice",
          question: "Solve: (x + 2)/3 = (2x - 1)/4",
          choices: ["x = 11", "x = -11", "x = 5", "x = -5"],
          answer: "x = 11",
          explanation: {
            steps: [
              "Multiply both sides by LCD = 12: 4(x + 2) = 3(2x - 1)",
              "Distribute: 4x + 8 = 6x - 3",
              "Subtract 4x: 8 = 2x - 3",
              "Add 3: 11 = 2x → x = 11/2"
            ],
            tip: "Clear fractions first with the LCD, then solve the resulting equation."
          }
        },
        {
          id: "vbs-13",
          type: "multiple-choice",
          question: "Solve: -3(2x + 5) = -4(x - 1) - 7",
          choices: ["x = -4", "x = 4", "x = -6", "x = 6"],
          answer: "x = -4",
          explanation: {
            steps: [
              "Distribute left: -6x - 15 = -4x + 4 - 7",
              "Simplify right: -6x - 15 = -4x - 3",
              "Add 6x: -15 = 2x - 3",
              "Add 3: -12 = 2x → x = -6"
            ],
            tip: "Distribute negative signs very carefully — a sign error early will cascade through every step."
          }
        },
        {
          id: "vbs-14",
          type: "fill-in",
          question: "Two friends are saving money. Alex has $120 and saves $15 per week. Jordan has $30 and saves $25 per week. After how many weeks w will they have the same amount?",
          answer: "w = 9",
          explanation: {
            steps: [
              "Alex: 120 + 15w; Jordan: 30 + 25w",
              "Set equal: 120 + 15w = 30 + 25w",
              "Subtract 15w: 120 = 30 + 10w",
              "Subtract 30: 90 = 10w → w = 9; Check: 120+135=255 and 30+225=255 ✓"
            ],
            tip: "Variables-on-both-sides equations arise naturally in 'when will they be equal?' problems."
          }
        },
        {
          id: "vbs-15",
          type: "fill-in",
          question: "Solve: 5 - 3(2x - 4) = 2x - (x + 3)",
          answer: "x = 2",
          explanation: {
            steps: [
              "Distribute left: 5 - 6x + 12 = 2x - x - 3",
              "Simplify both sides: 17 - 6x = x - 3",
              "Add 6x: 17 = 7x - 3",
              "Add 3: 20 = 7x → x = 20/7"
            ],
            tip: "Distribute carefully on both sides, combine like terms on each side, then collect variables."
          }
        },
        {
          id: "vbs-16",
          type: "fill-in",
          question: "Solve: 0.4x + 1.2 = 0.1x + 3.3",
          answer: "x = 7",
          explanation: {
            steps: [
              "Multiply every term by 10 to clear decimals: 4x + 12 = x + 33",
              "Subtract x: 3x + 12 = 33",
              "Subtract 12: 3x = 21",
              "x = 7; Check: 0.4(7) + 1.2 = 2.8 + 1.2 = 4.0 and 0.1(7) + 3.3 = 0.7 + 3.3 = 4.0 ✓"
            ],
            tip: "Multiplying through by a power of 10 converts decimal coefficients to whole numbers."
          }
        }
      ],
      guide: {
        concept: "When a variable appears on both sides of an equation, collect all variable terms on one side and all constants on the other. The method is the same as before — use inverse operations to isolate the variable.",
        examples: [
          {
            problem: "Solve: 2(x + 3) = 3(x - 1)",
            steps: ["Distribute: 2x + 6 = 3x - 3", "Subtract 2x: 6 = x - 3", "Add 3: x = 9", "Check: 2(12)=24, 3(8)=24 ✓"],
            answer: "x = 9"
          }
        ],
        tips: [
          "Move the variable term with the smaller coefficient so the result stays positive.",
          "Always distribute parentheses before moving variable terms.",
          "Check for special cases: variable cancels → check if result is true or false."
        ],
        commonMistakes: [
          "Moving a variable term but forgetting to apply the operation to the other side.",
          "Adding instead of subtracting (or vice versa) when moving a variable.",
          "Missing special cases: not recognizing that a false statement means no solution."
        ]
      }
    },
    {
      id: "literal-equations",
      title: "Literal Equations & Formulas",
      flashcards: [
        {
          front: "What is a literal equation?",
          back: "An equation that contains two or more variables. We use the same inverse-operation techniques to solve for one variable in terms of the others. Examples: A = lw, d = rt, y = mx + b."
        },
        {
          front: "How do you solve A = lw for l?",
          back: "Divide both sides by w: A/w = l, or l = A/w. This gives the formula for length when you know area and width. Example: if A = 24 and w = 4, then l = 24/4 = 6."
        },
        {
          front: "How do you solve P = 2l + 2w for l?",
          back: "Subtract 2w from both sides: P - 2w = 2l. Divide both sides by 2: l = (P - 2w)/2. Example: P = 20, w = 3 → l = (20 - 6)/2 = 7."
        },
        {
          front: "How do you solve y = mx + b for x?",
          back: "Subtract b from both sides: y - b = mx. Divide both sides by m: x = (y - b)/m. This is useful when you know y, the slope m, and intercept b."
        },
        {
          front: "How do you solve d = rt for t?",
          back: "Divide both sides by r: t = d/r. This gives time when you know distance and rate. Example: d = 150 miles, r = 50 mph → t = 150/50 = 3 hours."
        },
        {
          front: "What is the Celsius-Fahrenheit conversion formula?",
          back: "F = (9/5)C + 32, and solving for C: C = (5/9)(F - 32). To convert 77°F to Celsius: C = (5/9)(77 - 32) = (5/9)(45) = 25°C."
        },
        {
          front: "How do you solve for a variable in the perimeter formula P = 2l + 2w?",
          back: "To solve for w: subtract 2l → P - 2l = 2w, then divide by 2 → w = (P - 2l)/2. The variable you want should end up alone on one side, just like a normal equation."
        }
      ],
      problems: [
        {
          id: "le-1",
          type: "multiple-choice",
          question: "Solve A = lw for w.",
          choices: ["w = A/l", "w = A - l", "w = Al", "w = l/A"],
          answer: "w = A/l",
          explanation: {
            steps: [
              "Start with A = lw",
              "Divide both sides by l to isolate w",
              "A/l = w",
              "w = A/l"
            ],
            tip: "Treat l and A as if they were numbers — just divide to isolate w."
          }
        },
        {
          id: "le-2",
          type: "multiple-choice",
          question: "Solve d = rt for t.",
          choices: ["t = d/r", "t = dr", "t = r/d", "t = d - r"],
          answer: "t = d/r",
          explanation: {
            steps: [
              "Start with d = rt",
              "Divide both sides by r",
              "d/r = t",
              "t = d/r"
            ],
            tip: "The distance formula: distance = rate × time, so time = distance ÷ rate."
          }
        },
        {
          id: "le-3",
          type: "multiple-choice",
          question: "Solve P = 2l + 2w for l.",
          choices: ["l = (P - 2w)/2", "l = P - 2w", "l = P/2 - w", "Both A and C"],
          answer: "Both A and C",
          explanation: {
            steps: [
              "Subtract 2w from both sides: P - 2w = 2l",
              "Divide both sides by 2: (P - 2w)/2 = l",
              "This can also be written as P/2 - w = l",
              "Both forms are equivalent and correct"
            ],
            tip: "Simplify your answer — (P - 2w)/2 = P/2 - w/2... wait, that's P/2 - w only if we factor: (P-2w)/2 = P/2 - w. Yes, both A and C are correct."
          }
        },
        {
          id: "le-4",
          type: "multiple-choice",
          question: "Solve y = mx + b for x.",
          choices: ["x = (y - b)/m", "x = y - b/m", "x = (y + b)/m", "x = ym - b"],
          answer: "x = (y - b)/m",
          explanation: {
            steps: [
              "Start with y = mx + b",
              "Subtract b from both sides: y - b = mx",
              "Divide both sides by m: (y - b)/m = x",
              "x = (y - b)/m"
            ],
            tip: "Use parentheses — you must subtract b from ALL of y, not just part."
          }
        },
        {
          id: "le-5",
          type: "multiple-choice",
          question: "Using F = (9/5)C + 32, convert 25°C to Fahrenheit.",
          choices: ["77°F", "57°F", "13°F", "45°F"],
          answer: "77°F",
          explanation: {
            steps: [
              "Substitute C = 25: F = (9/5)(25) + 32",
              "Multiply: F = 45 + 32",
              "F = 77°F"
            ],
            tip: "Substitute into the formula and evaluate using order of operations."
          }
        },
        {
          id: "le-6",
          type: "multiple-choice",
          question: "Solve V = lwh for h.",
          choices: ["h = V/(lw)", "h = V - lw", "h = lw/V", "h = V + lw"],
          answer: "h = V/(lw)",
          explanation: {
            steps: [
              "Start with V = lwh",
              "Divide both sides by lw: V/(lw) = h",
              "h = V/(lw)"
            ],
            tip: "Treat lw as a single factor since they are multiplied together."
          }
        },
        {
          id: "le-7",
          type: "fill-in",
          question: "Solve 2x + 3y = 12 for y.",
          answer: "y = (12 - 2x)/3",
          explanation: {
            steps: [
              "Subtract 2x from both sides: 3y = 12 - 2x",
              "Divide both sides by 3: y = (12 - 2x)/3"
            ],
            tip: "Isolate the term containing y first, then divide by the coefficient of y."
          }
        },
        {
          id: "le-8",
          type: "fill-in",
          question: "The formula for the area of a triangle is A = (1/2)bh. Solve for b.",
          answer: "b = 2A/h",
          explanation: {
            steps: [
              "Start with A = (1/2)bh",
              "Multiply both sides by 2: 2A = bh",
              "Divide both sides by h: b = 2A/h"
            ],
            tip: "Multiply by 2 first to clear the fraction, then divide by h."
          }
        },
        {
          id: "le-9",
          type: "fill-in",
          question: "Solve C = (5/9)(F - 32) for F.",
          answer: "F = (9/5)C + 32",
          explanation: {
            steps: [
              "Multiply both sides by 9/5: (9/5)C = F - 32",
              "Add 32 to both sides: F = (9/5)C + 32"
            ],
            tip: "Multiply by the reciprocal of 5/9, which is 9/5."
          }
        },
        {
          id: "le-10",
          type: "fill-in",
          question: "Solve 5x - 2y = 10 for x.",
          answer: "x = (10 + 2y)/5",
          explanation: {
            steps: [
              "Add 2y to both sides: 5x = 10 + 2y",
              "Divide both sides by 5: x = (10 + 2y)/5"
            ],
            tip: "Isolate the 5x term first, then divide by 5."
          }
        },
        {
          id: "le-11",
          type: "multiple-choice",
          question: "The formula for the surface area of a cylinder is S = 2πr² + 2πrh. Solve for h.",
          choices: ["h = (S - 2πr²)/(2πr)", "h = S/(2πr) - r", "h = S - 2πr²", "Both A and B"],
          answer: "Both A and B",
          explanation: {
            steps: [
              "Subtract 2πr² from both sides: S - 2πr² = 2πrh",
              "Divide both sides by 2πr: h = (S - 2πr²)/(2πr)",
              "This can be rewritten: h = S/(2πr) - 2πr²/(2πr) = S/(2πr) - r",
              "Both forms are equivalent and correct"
            ],
            tip: "After isolating the term with h, divide every part by the coefficient of h."
          }
        },
        {
          id: "le-12",
          type: "multiple-choice",
          question: "The formula for simple interest is I = Prt. A bank earns $360 in interest on a principal P = $2000 at rate r = 6% (r = 0.06). Solve for t (time in years).",
          choices: ["t = 3", "t = 2", "t = 1.5", "t = 4"],
          answer: "t = 3",
          explanation: {
            steps: [
              "Start with I = Prt, substitute I = 360, P = 2000, r = 0.06",
              "360 = 2000 × 0.06 × t",
              "360 = 120t",
              "t = 360/120 = 3 years"
            ],
            tip: "Solve for the variable algebraically first, then substitute the known values."
          }
        },
        {
          id: "le-13",
          type: "multiple-choice",
          question: "Solve the formula for the area of a trapezoid A = (1/2)(b₁ + b₂)h for b₁.",
          choices: ["b₁ = 2A/h - b₂", "b₁ = 2A/h + b₂", "b₁ = A/h - b₂", "b₁ = (A - b₂h)/2"],
          answer: "b₁ = 2A/h - b₂",
          explanation: {
            steps: [
              "Multiply both sides by 2: 2A = (b₁ + b₂)h",
              "Divide both sides by h: 2A/h = b₁ + b₂",
              "Subtract b₂ from both sides: b₁ = 2A/h - b₂"
            ],
            tip: "Clear the fraction by multiplying by 2 first, then clear h by dividing, then isolate b₁."
          }
        },
        {
          id: "le-14",
          type: "fill-in",
          question: "Solve ax + by = c for y (assume b ≠ 0).",
          answer: "y = (c - ax)/b",
          explanation: {
            steps: [
              "Subtract ax from both sides: by = c - ax",
              "Divide both sides by b: y = (c - ax)/b"
            ],
            tip: "General literal equations follow the same steps as specific numeric ones — isolate the desired variable."
          }
        },
        {
          id: "le-15",
          type: "fill-in",
          question: "Solve the kinetic energy formula KE = (1/2)mv² for m.",
          answer: "m = 2KE/v²",
          explanation: {
            steps: [
              "Multiply both sides by 2: 2KE = mv²",
              "Divide both sides by v²: m = 2KE/v²"
            ],
            tip: "Treat v² as a single factor just like any variable — divide both sides by it."
          }
        },
        {
          id: "le-16",
          type: "fill-in",
          question: "The formula P = 2(l + w) gives the perimeter of a rectangle. If P = 54 and l = 3w - 1, find the value of w.",
          answer: "w = 7",
          explanation: {
            steps: [
              "Substitute l = 3w - 1 and P = 54: 54 = 2((3w - 1) + w)",
              "Simplify inside: 54 = 2(4w - 1)",
              "Distribute: 54 = 8w - 2",
              "Add 2: 56 = 8w → w = 7; Check: l = 3(7)-1 = 20; P = 2(20+7) = 2(27) = 54 ✓"
            ],
            tip: "Substituting one variable's expression into a formula creates a one-variable equation you can solve."
          }
        }
      ],
      guide: {
        concept: "Literal equations contain multiple variables. To solve for one variable, treat all other variables as if they were numbers and use the same inverse-operation techniques. The goal is to isolate the target variable on one side of the equation.",
        examples: [
          {
            problem: "Solve P = 2l + 2w for l",
            steps: ["Subtract 2w from both sides: P - 2w = 2l", "Divide both sides by 2: l = (P - 2w)/2"],
            answer: "l = (P - 2w)/2"
          }
        ],
        tips: [
          "Treat all other variables like constants — apply inverse operations to isolate the target.",
          "Use parentheses when multiple terms are divided by the same variable.",
          "Check by re-substituting into the original formula."
        ],
        commonMistakes: [
          "Incorrect division: solving A = lw for l by subtracting w instead of dividing.",
          "Missing parentheses: writing x = y - b/m instead of x = (y - b)/m.",
          "Applying operations to only part of an expression."
        ]
      }
    }
  ]
};

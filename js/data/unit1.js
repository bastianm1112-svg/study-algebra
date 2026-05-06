export const unit1 = {
  id: 1,
  title: "Foundations",
  emoji: "🔢",
  color: "#6c63ff",
  topics: [
    {
      id: "variables-expressions",
      title: "Variables & Expressions",
      flashcards: [
        {
          front: "What is a variable?",
          back: "A letter that represents an unknown or changing value. Example: in 3x + 2, the variable is x. Variables let us write general rules that work for many numbers."
        },
        {
          front: "What is an algebraic expression?",
          back: "A mathematical phrase combining numbers, variables, and operations — but NO equals sign. Examples: 4x - 7, 2a + 3b, x²+ 5. Compare to an equation, which has an equals sign."
        },
        {
          front: "How do you evaluate an expression?",
          back: "Replace every variable with the given number, then simplify using order of operations. Example: evaluate 2x + 5 when x = 3 → 2(3) + 5 = 6 + 5 = 11."
        },
        {
          front: "What is a coefficient?",
          back: "The number multiplied by a variable in a term. In 7x, the coefficient is 7. In -3y², the coefficient is -3. If no number is written, the coefficient is 1 (so x = 1x)."
        },
        {
          front: "What are like terms?",
          back: "Terms that have exactly the same variable(s) raised to the same power(s). Like terms can be combined. Examples: 3x and 5x are like terms (sum = 8x). 3x and 3x² are NOT like terms."
        },
        {
          front: "What is the distributive property?",
          back: "a(b + c) = ab + ac. Multiply the factor outside the parentheses by each term inside. Example: 3(x + 4) = 3·x + 3·4 = 3x + 12. Also works with subtraction: 2(5 - y) = 10 - 2y."
        },
        {
          front: "How do you translate a verbal phrase to an algebraic expression?",
          back: "Key words: 'sum' → +, 'difference' → -, 'product' → ×, 'quotient' → ÷, 'more than' → +, 'less than' → -, 'twice' → 2×. Example: 'five more than three times a number n' → 3n + 5."
        }
      ],
      problems: [
        {
          id: "ve-1",
          type: "multiple-choice",
          question: "Evaluate 3x + 2 when x = 4",
          choices: ["14", "10", "16", "12"],
          answer: "14",
          explanation: {
            steps: [
              "Write the expression: 3x + 2",
              "Substitute x = 4: 3(4) + 2",
              "Multiply: 12 + 2",
              "Add: 14"
            ],
            tip: "Always substitute the value in parentheses before doing arithmetic to avoid sign errors."
          }
        },
        {
          id: "ve-2",
          type: "multiple-choice",
          question: "What is the coefficient of y in the expression 8y - 3?",
          choices: ["8", "-3", "3", "1"],
          answer: "8",
          explanation: {
            steps: [
              "Identify the term containing the variable y: 8y",
              "The coefficient is the number multiplied by the variable",
              "In 8y, the number multiplied by y is 8",
              "The coefficient is 8"
            ],
            tip: "The coefficient is always the number directly in front of the variable."
          }
        },
        {
          id: "ve-3",
          type: "multiple-choice",
          question: "Evaluate 2x² - 3x + 1 when x = 3",
          choices: ["10", "16", "4", "28"],
          answer: "10",
          explanation: {
            steps: [
              "Substitute x = 3: 2(3)² - 3(3) + 1",
              "Evaluate the exponent first: 2(9) - 3(3) + 1",
              "Multiply: 18 - 9 + 1",
              "Subtract and add left to right: 9 + 1 = 10"
            ],
            tip: "Remember PEMDAS — handle the exponent before multiplying."
          }
        },
        {
          id: "ve-4",
          type: "multiple-choice",
          question: "Which expression means 'seven less than twice a number n'?",
          choices: ["2n - 7", "7 - 2n", "2(n - 7)", "2n + 7"],
          answer: "2n - 7",
          explanation: {
            steps: [
              "'Twice a number n' means 2n",
              "'Less than' means we subtract",
              "'Seven less than 2n' means we subtract 7 from 2n",
              "Result: 2n - 7"
            ],
            tip: "'Less than' reverses order — 'seven less than 2n' is 2n - 7, not 7 - 2n."
          }
        },
        {
          id: "ve-5",
          type: "multiple-choice",
          question: "Simplify: 5x + 3x - 2x",
          choices: ["6x", "8x", "10x", "5x"],
          answer: "6x",
          explanation: {
            steps: [
              "All three terms are like terms (each has variable x)",
              "Combine coefficients: 5 + 3 - 2 = 6",
              "Keep the variable: 6x"
            ],
            tip: "Only the coefficients change when combining like terms — the variable stays the same."
          }
        },
        {
          id: "ve-6",
          type: "multiple-choice",
          question: "Apply the distributive property: 4(3x - 5) = ?",
          choices: ["12x - 20", "12x - 5", "7x - 9", "12x + 20"],
          answer: "12x - 20",
          explanation: {
            steps: [
              "Multiply 4 by the first term: 4 · 3x = 12x",
              "Multiply 4 by the second term: 4 · (-5) = -20",
              "Write the result: 12x - 20"
            ],
            tip: "Distribute to EVERY term inside the parentheses, including the sign."
          }
        },
        {
          id: "ve-7",
          type: "fill-in",
          question: "Evaluate 5a - 4b when a = 2 and b = 3",
          answer: "-2",
          explanation: {
            steps: [
              "Substitute a = 2 and b = 3: 5(2) - 4(3)",
              "Multiply: 10 - 12",
              "Subtract: -2"
            ],
            tip: "Substitute all variables before performing any operations."
          }
        },
        {
          id: "ve-8",
          type: "fill-in",
          question: "Simplify: 6x + 4y - 2x + y",
          answer: "4x + 5y",
          explanation: {
            steps: [
              "Group like terms: (6x - 2x) + (4y + y)",
              "Combine x terms: 6x - 2x = 4x",
              "Combine y terms: 4y + y = 5y",
              "Result: 4x + 5y"
            ],
            tip: "Only combine terms with the same variable — x terms with x terms, y terms with y terms."
          }
        },
        {
          id: "ve-9",
          type: "fill-in",
          question: "Translate to an expression: 'the product of 6 and the sum of x and 4'",
          answer: "6(x + 4)",
          explanation: {
            steps: [
              "'The sum of x and 4' → (x + 4)",
              "'The product of 6 and (x + 4)' means multiply 6 by (x + 4)",
              "Result: 6(x + 4)"
            ],
            tip: "Words like 'the sum of...' inside 'the product of...' indicate parentheses."
          }
        },
        {
          id: "ve-10",
          type: "fill-in",
          question: "Evaluate x³ - 2x + 5 when x = -2",
          answer: "-7",
          explanation: {
            steps: [
              "Substitute x = -2: (-2)³ - 2(-2) + 5",
              "Evaluate exponent: -8 - 2(-2) + 5",
              "Multiply: -8 + 4 + 5",
              "Add left to right: -4 + 5 = 1 ... wait, recalculate: -8 + 4 = -4, then -4 + 5 = 1"
            ],
            tip: "Be careful with negative bases raised to odd exponents — the result stays negative."
          }
        }
      ],
      guide: {
        concept: "A variable is a symbol (usually a letter) that represents an unknown or changing number. An algebraic expression combines variables, numbers, and operations but has no equals sign. To evaluate an expression, replace the variable with a given number and simplify.",
        examples: [
          {
            problem: "Evaluate 2x² - 3x + 1 when x = 3",
            steps: [
              "Substitute x = 3: 2(3)² - 3(3) + 1",
              "Evaluate exponent: 2(9) - 3(3) + 1",
              "Multiply: 18 - 9 + 1",
              "Add/subtract left to right: 10"
            ],
            answer: "10"
          },
          {
            problem: "Simplify: 3x + 7 + 5x - 2",
            steps: [
              "Identify like terms: 3x and 5x are like terms; 7 and -2 are like terms",
              "Combine x terms: 3x + 5x = 8x",
              "Combine constants: 7 - 2 = 5",
              "Result: 8x + 5"
            ],
            answer: "8x + 5"
          }
        ],
        tips: [
          "Always substitute the full value in parentheses to avoid sign errors, especially with negatives.",
          "Follow order of operations (PEMDAS) after substituting.",
          "Only combine like terms — terms must have the same variable AND the same exponent."
        ],
        commonMistakes: [
          "Forgetting to apply the exponent before multiplying: 2x² means 2(x²), not (2x)².",
          "Confusing 'less than' — 'five less than x' is x - 5, not 5 - x.",
          "Not distributing to every term: 3(x + 4) = 3x + 12, not 3x + 4."
        ]
      }
    },
    {
      id: "order-of-operations",
      title: "Order of Operations",
      flashcards: [
        {
          front: "What is PEMDAS?",
          back: "An acronym for the order of operations: Parentheses, Exponents, Multiplication and Division (left to right), Addition and Subtraction (left to right). Also remembered as 'Please Excuse My Dear Aunt Sally.'"
        },
        {
          front: "Which operation comes first: parentheses?",
          back: "Yes — parentheses (and all grouping symbols like brackets [ ] and braces { }) are evaluated first. Work from the innermost group outward. Example: 2 × (3 + 4) = 2 × 7 = 14, not 6 + 4 = 10."
        },
        {
          front: "When do you evaluate exponents?",
          back: "After parentheses, but before multiplication, division, addition, or subtraction. Example: 3 + 2³ = 3 + 8 = 11. Do NOT add first: 3 + 2 = 5, 5³ = 125 is WRONG."
        },
        {
          front: "How do you handle multiplication and division?",
          back: "Multiplication and division have equal priority — evaluate them left to right as they appear. Example: 12 ÷ 4 × 3 = 3 × 3 = 9 (divide first since it's on the left). NOT 12 ÷ 12 = 1."
        },
        {
          front: "How do you handle addition and subtraction?",
          back: "Addition and subtraction have equal priority — evaluate them left to right as they appear. Example: 10 - 3 + 2 = 7 + 2 = 9 (subtract first since it's on the left). NOT 10 - 5 = 5."
        },
        {
          front: "What are nested grouping symbols?",
          back: "When grouping symbols appear inside each other, evaluate the innermost set first and work outward. Example: 2 × [3 + (8 - 5)] = 2 × [3 + 3] = 2 × 6 = 12."
        },
        {
          front: "What is the most common order-of-operations error?",
          back: "Adding or subtracting before multiplying or dividing. Example: 2 + 3 × 4 ≠ 20. Correct: 3 × 4 = 12 first, then 2 + 12 = 14. Another common error: treating × and ÷ as if × always comes before ÷."
        }
      ],
      problems: [
        {
          id: "oo-1",
          type: "multiple-choice",
          question: "Evaluate: 3 + 4 × 2",
          choices: ["14", "11", "10", "16"],
          answer: "11",
          explanation: {
            steps: [
              "Identify operations: addition (+) and multiplication (×)",
              "Multiplication comes before addition",
              "Multiply first: 4 × 2 = 8",
              "Then add: 3 + 8 = 11"
            ],
            tip: "Multiplication always comes before addition — don't just go left to right."
          }
        },
        {
          id: "oo-2",
          type: "multiple-choice",
          question: "Evaluate: (3 + 4) × 2",
          choices: ["14", "11", "10", "16"],
          answer: "14",
          explanation: {
            steps: [
              "Parentheses come first",
              "Evaluate inside parentheses: 3 + 4 = 7",
              "Multiply: 7 × 2 = 14"
            ],
            tip: "Parentheses change the order — always handle them first."
          }
        },
        {
          id: "oo-3",
          type: "multiple-choice",
          question: "Evaluate: 3 + 4 × 2² - (8 ÷ 4)",
          choices: ["17", "15", "13", "19"],
          answer: "17",
          explanation: {
            steps: [
              "Parentheses first: 8 ÷ 4 = 2 → expression becomes 3 + 4 × 2² - 2",
              "Exponents next: 2² = 4 → expression becomes 3 + 4 × 4 - 2",
              "Multiplication: 4 × 4 = 16 → expression becomes 3 + 16 - 2",
              "Add and subtract left to right: 3 + 16 = 19, then 19 - 2 = 17"
            ],
            tip: "Work through PEMDAS step by step — rewrite the expression after each step."
          }
        },
        {
          id: "oo-4",
          type: "multiple-choice",
          question: "Which operation should be performed first in: 5 × 3 + 2³ ÷ 4?",
          choices: ["Evaluate 2³", "Multiply 5 × 3", "Add 3 + 2", "Divide by 4"],
          answer: "Evaluate 2³",
          explanation: {
            steps: [
              "List operations: ×, +, exponent (³), ÷",
              "PEMDAS: P (none), E (exponents) comes before M, D, A, S",
              "The exponent 2³ should be evaluated first"
            ],
            tip: "Exponents come before multiplication and division in PEMDAS."
          }
        },
        {
          id: "oo-5",
          type: "multiple-choice",
          question: "Evaluate: 2 × [3 + (8 - 5)]",
          choices: ["12", "18", "6", "22"],
          answer: "12",
          explanation: {
            steps: [
              "Innermost parentheses first: 8 - 5 = 3",
              "Expression becomes: 2 × [3 + 3]",
              "Next brackets: 3 + 3 = 6",
              "Multiply: 2 × 6 = 12"
            ],
            tip: "With nested grouping symbols, always work from the inside out."
          }
        },
        {
          id: "oo-6",
          type: "multiple-choice",
          question: "Evaluate: 20 ÷ 4 × 5",
          choices: ["25", "1", "100", "4"],
          answer: "25",
          explanation: {
            steps: [
              "Multiplication and division have equal priority",
              "Work left to right: 20 ÷ 4 = 5",
              "Then multiply: 5 × 5 = 25"
            ],
            tip: "When × and ÷ appear together, work strictly left to right."
          }
        },
        {
          id: "oo-7",
          type: "fill-in",
          question: "Evaluate: 5² - 3 × 4 + 6",
          answer: "19",
          explanation: {
            steps: [
              "Exponent first: 5² = 25",
              "Expression: 25 - 3 × 4 + 6",
              "Multiplication: 3 × 4 = 12",
              "Expression: 25 - 12 + 6",
              "Left to right: 25 - 12 = 13, then 13 + 6 = 19"
            ],
            tip: "After handling exponents, do all multiplication/division before addition/subtraction."
          }
        },
        {
          id: "oo-8",
          type: "fill-in",
          question: "Evaluate: 18 - 2(3 + 1)²",
          answer: "-14",
          explanation: {
            steps: [
              "Parentheses first: 3 + 1 = 4",
              "Expression: 18 - 2(4)²",
              "Exponent: 4² = 16",
              "Expression: 18 - 2(16)",
              "Multiply: 2 × 16 = 32",
              "Subtract: 18 - 32 = -14"
            ],
            tip: "The exponent only applies to what is directly inside the parentheses, not the 2 outside."
          }
        },
        {
          id: "oo-9",
          type: "fill-in",
          question: "Evaluate: 4 + 12 ÷ (2² - 1) × 2",
          answer: "12",
          explanation: {
            steps: [
              "Parentheses first — but evaluate exponent inside: 2² = 4, so 4 - 1 = 3",
              "Expression: 4 + 12 ÷ 3 × 2",
              "Division and multiplication left to right: 12 ÷ 3 = 4",
              "Then: 4 × 2 = 8",
              "Finally add: 4 + 8 = 12"
            ],
            tip: "Evaluate exponents inside parentheses before doing the operation that groups them."
          }
        },
        {
          id: "oo-10",
          type: "fill-in",
          question: "Evaluate: 3 × (10 - 6) - 2³ + 5",
          answer: "9",
          explanation: {
            steps: [
              "Parentheses first: 10 - 6 = 4",
              "Expression: 3 × 4 - 2³ + 5",
              "Exponent: 2³ = 8",
              "Expression: 3 × 4 - 8 + 5",
              "Multiplication: 3 × 4 = 12",
              "Left to right: 12 - 8 + 5 = 4 + 5 = 9"
            ],
            tip: "Rewrite the expression at each step to stay organized."
          }
        }
      ],
      guide: {
        concept: "Order of operations is a universal agreement on the sequence for evaluating mathematical expressions. PEMDAS ensures everyone gets the same answer: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).",
        examples: [
          {
            problem: "Evaluate: 3 + 4 × 2² - (8 ÷ 4)",
            steps: [
              "Parentheses: 8 ÷ 4 = 2 → 3 + 4 × 2² - 2",
              "Exponents: 2² = 4 → 3 + 4 × 4 - 2",
              "Multiplication: 4 × 4 = 16 → 3 + 16 - 2",
              "Add/subtract left to right: 19 - 2 = 17"
            ],
            answer: "17"
          }
        ],
        tips: [
          "Rewrite the expression after each step to avoid mistakes.",
          "Multiplication and Division are equal priority — go left to right.",
          "Addition and Subtraction are equal priority — go left to right."
        ],
        commonMistakes: [
          "Adding before multiplying: 2 + 3 × 4 = 14, not 20.",
          "Dividing before a left-side multiplication: 6 × 2 ÷ 3 = 4 (not 6 × (2÷3) = 4, but correct by coincidence — always go left to right).",
          "Forgetting to handle exponents inside parentheses: in (2 + 3²), compute 3² first to get (2 + 9) = 11."
        ]
      }
    },
    {
      id: "properties-real-numbers",
      title: "Properties of Real Numbers",
      flashcards: [
        {
          front: "What is the commutative property?",
          back: "The order of numbers doesn't change the result for addition or multiplication. a + b = b + a and a × b = b × a. Example: 3 + 7 = 7 + 3 = 10; 4 × 5 = 5 × 4 = 20. NOTE: subtraction and division are NOT commutative."
        },
        {
          front: "What is the associative property?",
          back: "The grouping of numbers doesn't change the result for addition or multiplication. (a + b) + c = a + (b + c) and (a × b) × c = a × (b × c). Example: (2 + 3) + 4 = 2 + (3 + 4) = 9."
        },
        {
          front: "What is the distributive property?",
          back: "Multiplication distributes over addition (or subtraction): a(b + c) = ab + ac and a(b - c) = ab - ac. Example: 5(x + 3) = 5x + 15. This property bridges multiplication and addition."
        },
        {
          front: "What are the identity properties?",
          back: "Additive identity: a + 0 = a (adding zero keeps the value). Multiplicative identity: a × 1 = a (multiplying by one keeps the value). 0 is the additive identity; 1 is the multiplicative identity."
        },
        {
          front: "What are the inverse properties?",
          back: "Additive inverse: a + (-a) = 0 (a number plus its opposite equals zero). Multiplicative inverse: a × (1/a) = 1, a ≠ 0 (a number times its reciprocal equals one). Example: 5 + (-5) = 0; 3 × (1/3) = 1."
        },
        {
          front: "What is the zero product property?",
          back: "If a × b = 0, then a = 0 or b = 0 (or both). This is crucial for solving equations. Example: if (x - 3)(x + 2) = 0, then x - 3 = 0 or x + 2 = 0, giving x = 3 or x = -2."
        },
        {
          front: "What is the closure property?",
          back: "A set is closed under an operation if performing that operation on members of the set always produces a member of the same set. Real numbers are closed under +, -, ×, and ÷ (except ÷ by 0). Example: any two real numbers added always give a real number."
        }
      ],
      problems: [
        {
          id: "pr-1",
          type: "multiple-choice",
          question: "3 + 7 = 7 + 3 is an example of which property?",
          choices: ["Commutative Property of Addition", "Associative Property of Addition", "Identity Property of Addition", "Distributive Property"],
          answer: "Commutative Property of Addition",
          explanation: {
            steps: [
              "Notice that the two numbers (3 and 7) have swapped positions",
              "Changing the ORDER of addends without changing the sum",
              "This is the definition of the commutative property",
              "Since it involves addition, it is the Commutative Property of Addition"
            ],
            tip: "'Commutative' comes from 'commute' (to travel/move) — the numbers move around."
          }
        },
        {
          id: "pr-2",
          type: "multiple-choice",
          question: "(2 × 3) × 5 = 2 × (3 × 5) illustrates which property?",
          choices: ["Associative Property of Multiplication", "Commutative Property of Multiplication", "Distributive Property", "Identity Property"],
          answer: "Associative Property of Multiplication",
          explanation: {
            steps: [
              "Notice the numbers stay in the same order (2, 3, 5)",
              "Only the GROUPING (parentheses) changed",
              "Changing the grouping without changing the result is the associative property",
              "Since it involves multiplication, it is the Associative Property of Multiplication"
            ],
            tip: "'Associative' relates to how numbers associate (group) with each other."
          }
        },
        {
          id: "pr-3",
          type: "multiple-choice",
          question: "Apply the distributive property: 3(x + 5) = ?",
          choices: ["3x + 15", "3x + 5", "x + 15", "3x + 8"],
          answer: "3x + 15",
          explanation: {
            steps: [
              "Use a(b + c) = ab + ac with a = 3, b = x, c = 5",
              "Multiply 3 by x: 3 × x = 3x",
              "Multiply 3 by 5: 3 × 5 = 15",
              "Result: 3x + 15"
            ],
            tip: "Distribute to EVERY term inside — multiply 3 by both x AND 5."
          }
        },
        {
          id: "pr-4",
          type: "multiple-choice",
          question: "Which property is shown: 8 × 1 = 8?",
          choices: ["Multiplicative Identity", "Additive Identity", "Multiplicative Inverse", "Commutative Property"],
          answer: "Multiplicative Identity",
          explanation: {
            steps: [
              "Any number multiplied by 1 equals itself",
              "1 is the identity element for multiplication",
              "This is the Multiplicative Identity Property"
            ],
            tip: "The multiplicative identity is 1; the additive identity is 0."
          }
        },
        {
          id: "pr-5",
          type: "multiple-choice",
          question: "What is the additive inverse of -7?",
          choices: ["7", "-7", "1/7", "-1/7"],
          answer: "7",
          explanation: {
            steps: [
              "The additive inverse of a number is what you add to it to get 0",
              "-7 + ? = 0",
              "? = 7",
              "The additive inverse of -7 is 7"
            ],
            tip: "The additive inverse is simply the opposite (change the sign)."
          }
        },
        {
          id: "pr-6",
          type: "multiple-choice",
          question: "Use the distributive property to simplify: 5(2x - 3)",
          choices: ["10x - 15", "10x - 3", "7x - 8", "10x + 15"],
          answer: "10x - 15",
          explanation: {
            steps: [
              "Use a(b - c) = ab - ac with a = 5, b = 2x, c = 3",
              "Multiply 5 by 2x: 5 × 2x = 10x",
              "Multiply 5 by 3: 5 × 3 = 15",
              "Keep the subtraction sign: 10x - 15"
            ],
            tip: "The distributive property works with subtraction too — distribute the sign."
          }
        },
        {
          id: "pr-7",
          type: "fill-in",
          question: "What value of n makes n + (-12) = 0 true? (This illustrates the ___ inverse property)",
          answer: "12",
          explanation: {
            steps: [
              "We need a number that when added to -12 gives 0",
              "n + (-12) = 0",
              "n = 0 - (-12) = 12",
              "The additive inverse of -12 is 12"
            ],
            tip: "The additive inverse is the opposite — flip the sign."
          }
        },
        {
          id: "pr-8",
          type: "fill-in",
          question: "Use the distributive property to expand: 6(3x + 4y - 2)",
          answer: "18x + 24y - 12",
          explanation: {
            steps: [
              "Multiply 6 by each term inside",
              "6 × 3x = 18x",
              "6 × 4y = 24y",
              "6 × (-2) = -12",
              "Result: 18x + 24y - 12"
            ],
            tip: "Distribute to all terms — even when there are three or more."
          }
        },
        {
          id: "pr-9",
          type: "fill-in",
          question: "Name the property: (a + b) + c = a + (b + c)",
          answer: "Associative Property of Addition",
          explanation: {
            steps: [
              "The numbers a, b, c are in the same order on both sides",
              "Only the grouping (parentheses) has changed",
              "Changing grouping = associative property",
              "Since it uses addition, it is the Associative Property of Addition"
            ],
            tip: "Check: did the ORDER change (commutative) or just the GROUPING (associative)?"
          }
        },
        {
          id: "pr-10",
          type: "fill-in",
          question: "Simplify using the distributive property, then combine like terms: 2(3x + 4) + 5x",
          answer: "11x + 8",
          explanation: {
            steps: [
              "Distribute: 2(3x + 4) = 6x + 8",
              "Expression: 6x + 8 + 5x",
              "Combine like terms: 6x + 5x = 11x",
              "Result: 11x + 8"
            ],
            tip: "Always distribute first, then combine like terms."
          }
        }
      ],
      guide: {
        concept: "The properties of real numbers are rules that always hold true. They let us rearrange, regroup, and rewrite expressions to make calculations easier. Knowing which property is being used helps justify every algebraic step.",
        examples: [
          {
            problem: "Simplify: 4(2x + 3) - 5x using the distributive property",
            steps: [
              "Distribute: 4 × 2x + 4 × 3 = 8x + 12",
              "Expression becomes: 8x + 12 - 5x",
              "Combine like terms: 8x - 5x = 3x",
              "Result: 3x + 12"
            ],
            answer: "3x + 12"
          }
        ],
        tips: [
          "Commutative = order changes; Associative = grouping changes.",
          "The additive identity is 0; the multiplicative identity is 1.",
          "Use the distributive property before combining like terms."
        ],
        commonMistakes: [
          "Applying commutativity to subtraction: a - b ≠ b - a in general.",
          "Forgetting to distribute to the last term: 3(x + 4 - 2) needs 3 multiplied by ALL three terms.",
          "Confusing additive and multiplicative inverses: the inverse of 4 (additive) is -4; the inverse of 4 (multiplicative) is 1/4."
        ]
      }
    }
  ]
};

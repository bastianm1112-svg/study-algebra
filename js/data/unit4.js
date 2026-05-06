export const unit4 = {
  id: 4,
  title: "Functions & Graphing",
  emoji: "📈",
  color: "#43c6ac",
  topics: [
    {
      id: "intro-functions",
      title: "Introduction to Functions",
      flashcards: [
        {
          front: "What is a function?",
          back: "A relation where every input (x) has exactly one output (y). Example: f(x) = 2x + 1 — plug in x = 3, you always get 7. One input → one output."
        },
        {
          front: "What is the domain of a function?",
          back: "The set of all allowed input values (x-values). Example: for f(x) = √x, the domain is x ≥ 0 because you can't take the square root of a negative number."
        },
        {
          front: "What is the range of a function?",
          back: "The set of all possible output values (y-values). Example: for f(x) = x², the range is y ≥ 0 because squaring any real number gives a non-negative result."
        },
        {
          front: "What does function notation f(x) mean?",
          back: "f(x) means 'f evaluated at x' — it is just another name for y. Read f(x) = 3x - 2 as 'f of x equals 3x minus 2'. It does NOT mean f times x."
        },
        {
          front: "What is the vertical line test?",
          back: "A graphical test for functions: if any vertical line crosses a graph more than once, the graph is NOT a function. Example: a circle fails the test; a parabola opening up/down passes."
        },
        {
          front: "How do you evaluate a function?",
          back: "Substitute the given value for x and simplify. Example: f(x) = 4x - 1, find f(3). Replace x with 3: f(3) = 4(3) - 1 = 12 - 1 = 11."
        },
        {
          front: "What is the difference between a relation and a function?",
          back: "A relation is any set of ordered pairs. A function is a special relation where each x-value maps to exactly one y-value. Example: {(1,2),(1,3)} is a relation but NOT a function because x=1 maps to two y-values."
        }
      ],
      problems: [
        {
          id: "if-1",
          type: "multiple-choice",
          question: "Which of the following is NOT a function?",
          choices: ["y = 2x + 1", "{(1,2),(2,3),(3,4)}", "{(1,2),(1,3),(2,4)}", "y = x²"],
          answer: "{(1,2),(1,3),(2,4)}",
          explanation: {
            steps: [
              "A function requires each x-value to have exactly one y-value.",
              "Check {(1,2),(1,3),(2,4)}: the input x = 1 maps to both y = 2 AND y = 3.",
              "Since one input gives two outputs, this is NOT a function.",
              "All other options pass the vertical line test — each x gives exactly one y."
            ],
            tip: "Use the vertical line test: if any vertical line crosses the graph more than once, it's not a function."
          }
        },
        {
          id: "if-2",
          type: "multiple-choice",
          question: "Given f(x) = 5x - 3, what is f(4)?",
          choices: ["17", "23", "12", "7"],
          answer: "17",
          explanation: {
            steps: [
              "Write the function: f(x) = 5x - 3.",
              "Substitute x = 4: f(4) = 5(4) - 3.",
              "Multiply: 5 × 4 = 20.",
              "Subtract: 20 - 3 = 17."
            ],
            tip: "Always replace every x with the given value inside parentheses."
          }
        },
        {
          id: "if-3",
          type: "fill-in",
          question: "Given f(x) = x² + 2x, find f(3).",
          answer: "15",
          explanation: {
            steps: [
              "Write the function: f(x) = x² + 2x.",
              "Substitute x = 3: f(3) = (3)² + 2(3).",
              "Evaluate powers: 9 + 2(3).",
              "Multiply: 9 + 6.",
              "Add: 15."
            ],
            tip: "Evaluate exponents before multiplying (order of operations)."
          }
        },
        {
          id: "if-4",
          type: "multiple-choice",
          question: "What is the domain of the set {(2,5),(4,7),(6,9)}?",
          choices: ["{5,7,9}", "{2,4,6}", "{2,4,6,5,7,9}", "{0,2,4,6}"],
          answer: "{2,4,6}",
          explanation: {
            steps: [
              "The domain is the set of all x-values (first coordinates) in the relation.",
              "List the first value from each ordered pair: 2, 4, 6.",
              "The domain is {2, 4, 6}."
            ],
            tip: "Domain = x-values (inputs). Range = y-values (outputs)."
          }
        },
        {
          id: "if-5",
          type: "multiple-choice",
          question: "What is the range of the set {(1,3),(2,3),(3,5)}?",
          choices: ["{1,2,3}", "{3,5}", "{1,2,3,5}", "{3,3,5}"],
          answer: "{3,5}",
          explanation: {
            steps: [
              "The range is the set of all y-values (second coordinates).",
              "List the second value from each pair: 3, 3, 5.",
              "Remove duplicates: {3, 5}.",
              "The range is {3, 5}."
            ],
            tip: "List unique y-values only — don't repeat the same value twice in a set."
          }
        },
        {
          id: "if-6",
          type: "multiple-choice",
          question: "Which mapping diagram represents a function?",
          choices: [
            "1→2, 1→3, 2→4",
            "1→2, 2→3, 3→4",
            "1→2, 2→2, 2→3",
            "1→2, 1→2, 1→3"
          ],
          answer: "1→2, 2→3, 3→4",
          explanation: {
            steps: [
              "A function maps each input to exactly one output.",
              "Check option A: input 1 maps to both 2 and 3 — NOT a function.",
              "Check option B: each input (1, 2, 3) maps to exactly one output — this IS a function.",
              "Check option C: input 2 maps to both 2 and 3 — NOT a function.",
              "Check option D: input 1 maps to both 2 and 3 — NOT a function."
            ],
            tip: "In a mapping diagram, each arrow from the same input must point to only one output."
          }
        },
        {
          id: "if-7",
          type: "fill-in",
          question: "Given g(x) = -2x + 10, find g(0).",
          answer: "10",
          explanation: {
            steps: [
              "Write the function: g(x) = -2x + 10.",
              "Substitute x = 0: g(0) = -2(0) + 10.",
              "Multiply: 0 + 10.",
              "Result: g(0) = 10."
            ],
            tip: "When x = 0, the function value equals the constant term (y-intercept)."
          }
        },
        {
          id: "if-8",
          type: "multiple-choice",
          question: "Which of the following equations is NOT a function?",
          choices: ["y = 3x + 1", "x = 4", "y = x² - 2", "y = |x|"],
          answer: "x = 4",
          explanation: {
            steps: [
              "The equation x = 4 is a vertical line.",
              "At x = 4, there are infinitely many y-values: (4,0), (4,1), (4,-5), etc.",
              "Since one x gives many y outputs, x = 4 is NOT a function.",
              "All other equations give exactly one y for each x."
            ],
            tip: "Vertical lines always fail the vertical line test and are never functions."
          }
        },
        {
          id: "if-9",
          type: "fill-in",
          question: "Given f(x) = 2x² - 3, find f(-2).",
          answer: "5",
          explanation: {
            steps: [
              "Write the function: f(x) = 2x² - 3.",
              "Substitute x = -2: f(-2) = 2(-2)² - 3.",
              "Evaluate the exponent: (-2)² = 4.",
              "Multiply: 2(4) - 3 = 8 - 3.",
              "Subtract: 5."
            ],
            tip: "(-2)² = 4, not -4. Squaring a negative number gives a positive result."
          }
        },
        {
          id: "if-10",
          type: "multiple-choice",
          question: "If f(3) = 7, which of the following must be true?",
          choices: [
            "The input 7 gives output 3",
            "The input 3 gives output 7",
            "f(7) = 3",
            "The function equals 3/7"
          ],
          answer: "The input 3 gives output 7",
          explanation: {
            steps: [
              "f(3) = 7 means: when x = 3 is the input, y = 7 is the output.",
              "So the input 3 gives the output 7.",
              "This tells us nothing about f(7) — that would require more information.",
              "The ordered pair (3, 7) is on the graph of f."
            ],
            tip: "f(a) = b means the point (a, b) is on the graph of f."
          }
        }
      ],
      guide: {
        concept: "A function is a special relationship where each input value (x) produces exactly one output value (y). Functions are written as f(x), read 'f of x'. The domain is all valid inputs; the range is all possible outputs.",
        examples: [
          {
            problem: "Given f(x) = 3x - 2, find f(4).",
            steps: ["Write the function: f(x) = 3x - 2.", "Substitute x = 4: f(4) = 3(4) - 2.", "Multiply: 12 - 2.", "Subtract: 10."],
            answer: "f(4) = 10"
          },
          {
            problem: "Is {(1,2),(2,5),(1,3)} a function?",
            steps: ["List all x-values: 1, 2, 1.", "Check for repeated x-values: x = 1 appears twice.", "x = 1 maps to both y = 2 and y = 3.", "Since one input gives two outputs, this is NOT a function."],
            answer: "Not a function"
          }
        ],
        tips: [
          "The vertical line test: if any vertical line hits a graph more than once, it's not a function.",
          "f(x) is just another name for y — they mean the same thing.",
          "Domain = x-values (inputs), Range = y-values (outputs)."
        ],
        commonMistakes: [
          "Thinking a graph is a function just because it looks like one — always check with the vertical line test.",
          "Confusing f(x) as 'f times x' — it means 'f evaluated at x'.",
          "Forgetting to square negative numbers correctly: (-3)² = 9, not -9."
        ]
      }
    },
    {
      id: "coordinate-plane",
      title: "Graphing on the Coordinate Plane",
      flashcards: [
        {
          front: "What is the x-axis?",
          back: "The horizontal number line in a coordinate plane. Points on the x-axis have y = 0. Example: the point (4, 0) lies on the x-axis."
        },
        {
          front: "What is the y-axis?",
          back: "The vertical number line in a coordinate plane. Points on the y-axis have x = 0. Example: the point (0, -3) lies on the y-axis."
        },
        {
          front: "What is the origin?",
          back: "The point (0, 0) where the x-axis and y-axis intersect. It is the center of the coordinate plane."
        },
        {
          front: "What are the four quadrants?",
          back: "Quadrant I: (+,+) — top right. Quadrant II: (−,+) — top left. Quadrant III: (−,−) — bottom left. Quadrant IV: (+,−) — bottom right. Example: (−3, 5) is in Quadrant II."
        },
        {
          front: "What is an ordered pair (x, y)?",
          back: "A pair of numbers that locates a point on the coordinate plane. The first number is the x-coordinate (left/right), the second is the y-coordinate (up/down). Example: (3, -2) means go right 3, down 2."
        },
        {
          front: "What is the x-intercept?",
          back: "The point where a graph crosses the x-axis. At the x-intercept, y = 0. Example: for y = 2x - 6, set y = 0: 0 = 2x - 6, so x = 3. The x-intercept is (3, 0)."
        },
        {
          front: "What is the y-intercept?",
          back: "The point where a graph crosses the y-axis. At the y-intercept, x = 0. Example: for y = 4x - 8, set x = 0: y = -8. The y-intercept is (0, -8)."
        }
      ],
      problems: [
        {
          id: "cp-1",
          type: "multiple-choice",
          question: "Which quadrant contains the point (−3, 5)?",
          choices: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
          answer: "Quadrant II",
          explanation: {
            steps: [
              "The point is (−3, 5): x is negative, y is positive.",
              "Quadrant I: (+, +). Quadrant II: (−, +).",
              "Quadrant III: (−, −). Quadrant IV: (+, −).",
              "Since x < 0 and y > 0, the point is in Quadrant II."
            ],
            tip: "Remember: Quadrants go counterclockwise starting from top-right (I), then II (top-left), III (bottom-left), IV (bottom-right)."
          }
        },
        {
          id: "cp-2",
          type: "fill-in",
          question: "What is the x-intercept of 2x + 3y = 6? Give your answer as an ordered pair.",
          answer: "(3, 0)",
          explanation: {
            steps: [
              "To find the x-intercept, set y = 0.",
              "Substitute: 2x + 3(0) = 6.",
              "Simplify: 2x = 6.",
              "Divide: x = 3.",
              "The x-intercept is (3, 0)."
            ],
            tip: "x-intercept: set y = 0 and solve. y-intercept: set x = 0 and solve."
          }
        },
        {
          id: "cp-3",
          type: "fill-in",
          question: "Find the y-intercept of y = 4x − 8. Give your answer as an ordered pair.",
          answer: "(0, -8)",
          explanation: {
            steps: [
              "To find the y-intercept, set x = 0.",
              "Substitute: y = 4(0) − 8.",
              "Simplify: y = 0 − 8 = −8.",
              "The y-intercept is (0, −8)."
            ],
            tip: "In y = mx + b form, the y-intercept is b — here b = −8."
          }
        },
        {
          id: "cp-4",
          type: "multiple-choice",
          question: "Which quadrant contains the point (7, −2)?",
          choices: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
          answer: "Quadrant IV",
          explanation: {
            steps: [
              "The point (7, −2): x is positive, y is negative.",
              "Quadrant IV contains points where x > 0 and y < 0.",
              "The point (7, −2) is in Quadrant IV."
            ],
            tip: "Quadrant IV is the bottom-right region of the coordinate plane."
          }
        },
        {
          id: "cp-5",
          type: "multiple-choice",
          question: "The point (0, 5) lies on which axis?",
          choices: ["x-axis", "y-axis", "origin", "Quadrant I"],
          answer: "y-axis",
          explanation: {
            steps: [
              "Any point with x = 0 lies on the y-axis.",
              "The point (0, 5) has x = 0, so it is on the y-axis.",
              "Points on the x-axis have y = 0 — like (5, 0)."
            ],
            tip: "On the y-axis, x = 0. On the x-axis, y = 0."
          }
        },
        {
          id: "cp-6",
          type: "multiple-choice",
          question: "What are the coordinates of the origin?",
          choices: ["(1, 1)", "(0, 1)", "(1, 0)", "(0, 0)"],
          answer: "(0, 0)",
          explanation: {
            steps: [
              "The origin is where the x-axis and y-axis intersect.",
              "At the intersection, both x = 0 and y = 0.",
              "The coordinates of the origin are (0, 0)."
            ],
            tip: "The origin is always at (0, 0) — the center of the coordinate plane."
          }
        },
        {
          id: "cp-7",
          type: "fill-in",
          question: "Find the x-intercept of y = 3x − 9. Give your answer as an ordered pair.",
          answer: "(3, 0)",
          explanation: {
            steps: [
              "Set y = 0 to find the x-intercept.",
              "0 = 3x − 9.",
              "Add 9 to both sides: 9 = 3x.",
              "Divide: x = 3.",
              "The x-intercept is (3, 0)."
            ],
            tip: "The x-intercept is where the line crosses the x-axis, so y = 0 there."
          }
        },
        {
          id: "cp-8",
          type: "multiple-choice",
          question: "Which quadrant contains the point (−4, −6)?",
          choices: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
          answer: "Quadrant III",
          explanation: {
            steps: [
              "The point (−4, −6): x is negative, y is negative.",
              "Quadrant III contains points where x < 0 and y < 0.",
              "The point is in Quadrant III."
            ],
            tip: "Quadrant III is the bottom-left region — both coordinates are negative."
          }
        },
        {
          id: "cp-9",
          type: "fill-in",
          question: "What is the y-intercept of 5x − 2y = 10? Give your answer as an ordered pair.",
          answer: "(0, -5)",
          explanation: {
            steps: [
              "Set x = 0 to find the y-intercept.",
              "5(0) − 2y = 10.",
              "Simplify: −2y = 10.",
              "Divide by −2: y = −5.",
              "The y-intercept is (0, −5)."
            ],
            tip: "Always substitute x = 0 into the equation to find the y-intercept."
          }
        },
        {
          id: "cp-10",
          type: "multiple-choice",
          question: "A point has a negative x-coordinate and a positive y-coordinate. Where is it located?",
          choices: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
          answer: "Quadrant II",
          explanation: {
            steps: [
              "x < 0 and y > 0 describes Quadrant II.",
              "Quadrant II is the top-left region of the coordinate plane.",
              "Example: (−2, 7) is in Quadrant II."
            ],
            tip: "When x is negative and y is positive, you're in the top-left — Quadrant II."
          }
        }
      ],
      guide: {
        concept: "The coordinate plane has two axes: the horizontal x-axis and the vertical y-axis, intersecting at the origin (0,0). Points are written as ordered pairs (x, y). The plane is divided into four quadrants.",
        examples: [
          {
            problem: "Find the x- and y-intercepts of 4x + 2y = 8.",
            steps: [
              "x-intercept: set y = 0 → 4x = 8 → x = 2. Point: (2, 0).",
              "y-intercept: set x = 0 → 2y = 8 → y = 4. Point: (0, 4)."
            ],
            answer: "x-intercept: (2, 0), y-intercept: (0, 4)"
          }
        ],
        tips: [
          "x-intercept: set y = 0. y-intercept: set x = 0.",
          "Quadrant I (+,+), II (−,+), III (−,−), IV (+,−).",
          "The origin (0,0) is not in any quadrant."
        ],
        commonMistakes: [
          "Mixing up x and y coordinates — remember x comes first in (x, y).",
          "Forgetting intercepts are written as ordered pairs, not just numbers."
        ]
      }
    },
    {
      id: "slope",
      title: "Slope & Rate of Change",
      flashcards: [
        {
          front: "What is the slope formula?",
          back: "m = (y₂ − y₁) / (x₂ − x₁). Example: slope between (1, 3) and (4, 9): m = (9−3)/(4−1) = 6/3 = 2."
        },
        {
          front: "What does positive slope look like?",
          back: "A line that rises from left to right has positive slope. Example: y = 3x + 1 has slope m = 3 > 0, so it goes uphill left to right."
        },
        {
          front: "What does negative slope look like?",
          back: "A line that falls from left to right has negative slope. Example: y = −2x + 5 has slope m = −2 < 0, so it goes downhill left to right."
        },
        {
          front: "What is zero slope?",
          back: "A horizontal line has slope = 0. Example: y = 4 is a horizontal line — it never rises or falls, so m = 0."
        },
        {
          front: "What is undefined slope?",
          back: "A vertical line has undefined slope. Example: x = 3 is a vertical line — the denominator (x₂ − x₁) = 0, so the slope is undefined."
        },
        {
          front: "What is 'rise over run'?",
          back: "An informal way to remember slope: rise = vertical change (Δy), run = horizontal change (Δx). Slope = rise/run. Example: from (0,1) to (3,7): rise = 6, run = 3, slope = 6/3 = 2."
        },
        {
          front: "What do parallel lines have in common regarding slope?",
          back: "Parallel lines have equal (identical) slopes but different y-intercepts. Example: y = 3x + 1 and y = 3x − 4 are parallel — both have slope 3."
        }
      ],
      problems: [
        {
          id: "sl-1",
          type: "fill-in",
          question: "Find the slope between the points (2, 4) and (6, 12).",
          answer: "2",
          explanation: {
            steps: [
              "Use the slope formula: m = (y₂ − y₁) / (x₂ − x₁).",
              "Label: (x₁, y₁) = (2, 4) and (x₂, y₂) = (6, 12).",
              "Substitute: m = (12 − 4) / (6 − 2).",
              "Simplify: m = 8 / 4 = 2."
            ],
            tip: "Always subtract in the same order: (second point − first point) for both y and x."
          }
        },
        {
          id: "sl-2",
          type: "multiple-choice",
          question: "What type of slope does the line y = −5x + 3 have?",
          choices: ["Positive", "Negative", "Zero", "Undefined"],
          answer: "Negative",
          explanation: {
            steps: [
              "The equation y = −5x + 3 is in slope-intercept form y = mx + b.",
              "The slope m = −5.",
              "Since −5 < 0, the slope is negative.",
              "The line falls from left to right."
            ],
            tip: "The sign of m tells you the direction: positive rises, negative falls."
          }
        },
        {
          id: "sl-3",
          type: "multiple-choice",
          question: "What is the slope of a horizontal line?",
          choices: ["1", "Undefined", "0", "−1"],
          answer: "0",
          explanation: {
            steps: [
              "A horizontal line has the same y-value for every x.",
              "Using the slope formula, y₂ − y₁ = 0 (no vertical change).",
              "m = 0 / (x₂ − x₁) = 0.",
              "Horizontal lines always have slope = 0."
            ],
            tip: "Horizontal = 0 slope. Vertical = undefined slope."
          }
        },
        {
          id: "sl-4",
          type: "fill-in",
          question: "Find the slope between (−1, 5) and (3, −3).",
          answer: "-2",
          explanation: {
            steps: [
              "m = (y₂ − y₁) / (x₂ − x₁).",
              "m = (−3 − 5) / (3 − (−1)).",
              "m = −8 / 4.",
              "m = −2."
            ],
            tip: "Be careful subtracting negatives: 3 − (−1) = 3 + 1 = 4."
          }
        },
        {
          id: "sl-5",
          type: "multiple-choice",
          question: "What is the slope of the vertical line x = 7?",
          choices: ["7", "0", "1/7", "Undefined"],
          answer: "Undefined",
          explanation: {
            steps: [
              "A vertical line has the same x-value for every y.",
              "x₂ − x₁ = 7 − 7 = 0.",
              "The slope formula has 0 in the denominator.",
              "Division by zero is undefined, so the slope is undefined."
            ],
            tip: "Vertical lines are x = a. They have undefined slope because you'd divide by zero."
          }
        },
        {
          id: "sl-6",
          type: "multiple-choice",
          question: "A line has slope 3/4. Starting at (0, 2), what is the next point going right 4 units?",
          choices: ["(4, 5)", "(4, 3)", "(3, 4)", "(4, 6)"],
          answer: "(4, 5)",
          explanation: {
            steps: [
              "Slope = rise/run = 3/4, meaning run 4 → rise 3.",
              "Start at (0, 2). Move right 4: x = 0 + 4 = 4.",
              "Move up 3: y = 2 + 3 = 5.",
              "Next point is (4, 5)."
            ],
            tip: "Slope = rise/run. Run right by denominator, rise up by numerator (for positive slope)."
          }
        },
        {
          id: "sl-7",
          type: "fill-in",
          question: "A car travels 150 miles in 3 hours. What is the rate of change (slope) in miles per hour?",
          answer: "50",
          explanation: {
            steps: [
              "Rate of change = change in distance / change in time.",
              "= 150 miles / 3 hours.",
              "= 50 miles per hour."
            ],
            tip: "In real-world problems, slope = rate of change = (change in y) / (change in x)."
          }
        },
        {
          id: "sl-8",
          type: "fill-in",
          question: "Find the slope between (0, 0) and (5, 15).",
          answer: "3",
          explanation: {
            steps: [
              "m = (15 − 0) / (5 − 0).",
              "m = 15 / 5.",
              "m = 3."
            ],
            tip: "When one point is the origin (0,0), slope = y₂ / x₂."
          }
        },
        {
          id: "sl-9",
          type: "multiple-choice",
          question: "Which pair of lines is parallel?",
          choices: [
            "y = 2x + 1 and y = −2x + 1",
            "y = 3x − 4 and y = 3x + 7",
            "y = x + 2 and y = 2x + 2",
            "y = 4x + 1 and y = x + 4"
          ],
          answer: "y = 3x − 4 and y = 3x + 7",
          explanation: {
            steps: [
              "Parallel lines have the same slope.",
              "y = 3x − 4 has slope 3. y = 3x + 7 has slope 3.",
              "They have equal slopes but different y-intercepts.",
              "These lines are parallel."
            ],
            tip: "Same slope + different y-intercept = parallel lines."
          }
        },
        {
          id: "sl-10",
          type: "fill-in",
          question: "Find the slope between (−3, −2) and (1, 6).",
          answer: "2",
          explanation: {
            steps: [
              "m = (y₂ − y₁) / (x₂ − x₁).",
              "m = (6 − (−2)) / (1 − (−3)).",
              "m = (6 + 2) / (1 + 3).",
              "m = 8 / 4 = 2."
            ],
            tip: "Subtracting a negative: 6 − (−2) = 6 + 2 = 8."
          }
        }
      ],
      guide: {
        concept: "Slope measures the steepness and direction of a line. It equals rise over run, or (y₂ − y₁)/(x₂ − x₁). Slope can be positive (rising), negative (falling), zero (horizontal), or undefined (vertical).",
        examples: [
          {
            problem: "Find the slope between (1, 2) and (5, 10).",
            steps: ["m = (10 − 2)/(5 − 1)", "m = 8/4", "m = 2"],
            answer: "Slope = 2"
          }
        ],
        tips: [
          "Positive slope → line goes up left to right.",
          "Negative slope → line goes down left to right.",
          "Horizontal line → slope = 0. Vertical line → slope is undefined.",
          "Parallel lines have the same slope."
        ],
        commonMistakes: [
          "Subtracting coordinates in the wrong order: always (y₂ − y₁)/(x₂ − x₁), not the reverse.",
          "Confusing zero slope (horizontal) with undefined slope (vertical)."
        ]
      }
    },
    {
      id: "slope-intercept-form",
      title: "Slope-Intercept Form (y = mx + b)",
      flashcards: [
        {
          front: "What is slope-intercept form?",
          back: "y = mx + b, where m is the slope and b is the y-intercept. Example: y = 2x + 3 has slope m = 2 and y-intercept b = 3 (crosses y-axis at (0, 3))."
        },
        {
          front: "What does 'm' represent in y = mx + b?",
          back: "m is the slope — the rate of change and steepness of the line. Example: in y = −4x + 1, the slope is −4, meaning the line falls 4 units for every 1 unit moved right."
        },
        {
          front: "What does 'b' represent in y = mx + b?",
          back: "b is the y-intercept — the y-coordinate where the line crosses the y-axis (where x = 0). Example: in y = 3x − 7, the y-intercept is −7, so the line crosses at (0, −7)."
        },
        {
          front: "How do you graph a line from slope-intercept form?",
          back: "1) Plot the y-intercept (0, b). 2) Use slope (rise/run) to find the next point. 3) Draw the line. Example: y = 2x + 1 — plot (0,1), then go up 2 and right 1 to (1,3)."
        },
        {
          front: "How do you write an equation from a graph?",
          back: "Identify the y-intercept b (where the line crosses the y-axis), then find the slope m from two points. Write y = mx + b. Example: crosses y-axis at 2, slope = 3 → y = 3x + 2."
        },
        {
          front: "How do you convert a standard form equation to slope-intercept form?",
          back: "Solve for y. Example: 2x + 3y = 12 → 3y = −2x + 12 → y = (−2/3)x + 4. Slope = −2/3, y-intercept = 4."
        },
        {
          front: "How do parallel lines relate in slope-intercept form?",
          back: "Parallel lines have the same slope (m) but different y-intercepts (b). Example: y = 5x + 3 and y = 5x − 2 are parallel — both have slope 5."
        }
      ],
      problems: [
        {
          id: "si-1",
          type: "multiple-choice",
          question: "What is the slope of y = −3x + 7?",
          choices: ["7", "3", "−3", "−7"],
          answer: "−3",
          explanation: {
            steps: [
              "The equation y = −3x + 7 is in slope-intercept form y = mx + b.",
              "m = −3 and b = 7.",
              "The slope is −3."
            ],
            tip: "In y = mx + b, the coefficient of x is the slope."
          }
        },
        {
          id: "si-2",
          type: "fill-in",
          question: "What is the y-intercept of y = 4x − 9?",
          answer: "-9",
          explanation: {
            steps: [
              "The equation is in slope-intercept form y = mx + b.",
              "m = 4 and b = −9.",
              "The y-intercept is −9 (the line crosses the y-axis at (0, −9))."
            ],
            tip: "The y-intercept is the constant term b in y = mx + b."
          }
        },
        {
          id: "si-3",
          type: "fill-in",
          question: "Write the equation of a line with slope 3 and y-intercept −2.",
          answer: "y = 3x - 2",
          explanation: {
            steps: [
              "Use slope-intercept form: y = mx + b.",
              "Substitute m = 3 and b = −2.",
              "y = 3x + (−2).",
              "y = 3x − 2."
            ],
            tip: "Just plug m and b directly into y = mx + b."
          }
        },
        {
          id: "si-4",
          type: "multiple-choice",
          question: "Convert 2x + 3y = 9 to slope-intercept form.",
          choices: ["y = 2x + 3", "y = −(2/3)x + 3", "y = (2/3)x + 3", "y = −2x + 9"],
          answer: "y = −(2/3)x + 3",
          explanation: {
            steps: [
              "Start with 2x + 3y = 9.",
              "Subtract 2x from both sides: 3y = −2x + 9.",
              "Divide every term by 3: y = (−2/3)x + 3.",
              "Slope = −2/3, y-intercept = 3."
            ],
            tip: "To convert to slope-intercept form, isolate y by subtracting the x term and then dividing by the y coefficient."
          }
        },
        {
          id: "si-5",
          type: "multiple-choice",
          question: "Which line is parallel to y = 4x − 1?",
          choices: ["y = −4x − 1", "y = 4x + 5", "y = (1/4)x − 1", "y = 4"],
          answer: "y = 4x + 5",
          explanation: {
            steps: [
              "Parallel lines have the same slope.",
              "y = 4x − 1 has slope m = 4.",
              "Look for an equation with slope 4: y = 4x + 5 has m = 4.",
              "y = 4x + 5 is parallel to y = 4x − 1."
            ],
            tip: "Same slope, different y-intercept = parallel lines."
          }
        },
        {
          id: "si-6",
          type: "fill-in",
          question: "Write the equation of a line with slope −1/2 and y-intercept 6.",
          answer: "y = -1/2 x + 6",
          explanation: {
            steps: [
              "Use slope-intercept form: y = mx + b.",
              "m = −1/2 and b = 6.",
              "y = (−1/2)x + 6."
            ],
            tip: "Fractional slopes are fine — just substitute them directly."
          }
        },
        {
          id: "si-7",
          type: "multiple-choice",
          question: "A line has slope 2 and passes through (0, −5). What is the equation?",
          choices: ["y = −5x + 2", "y = 2x − 5", "y = 2x + 5", "y = −2x − 5"],
          answer: "y = 2x − 5",
          explanation: {
            steps: [
              "The point (0, −5) is on the y-axis, so the y-intercept b = −5.",
              "Slope m = 2.",
              "Use y = mx + b: y = 2x + (−5).",
              "y = 2x − 5."
            ],
            tip: "If given the point (0, b), that value is directly the y-intercept."
          }
        },
        {
          id: "si-8",
          type: "multiple-choice",
          question: "Convert 5x − y = 10 to slope-intercept form.",
          choices: ["y = 5x + 10", "y = 5x − 10", "y = −5x + 10", "y = −5x − 10"],
          answer: "y = 5x − 10",
          explanation: {
            steps: [
              "Start with 5x − y = 10.",
              "Subtract 5x from both sides: −y = −5x + 10.",
              "Multiply both sides by −1: y = 5x − 10.",
              "Slope = 5, y-intercept = −10."
            ],
            tip: "When isolating y, multiplying both sides by −1 flips all signs."
          }
        },
        {
          id: "si-9",
          type: "fill-in",
          question: "What is the slope of the line that passes through (0, 4) and (1, 7)?",
          answer: "3",
          explanation: {
            steps: [
              "m = (y₂ − y₁) / (x₂ − x₁).",
              "m = (7 − 4) / (1 − 0).",
              "m = 3 / 1 = 3."
            ],
            tip: "Since one point is (0, 4) on the y-axis, b = 4 and you can write y = 3x + 4."
          }
        },
        {
          id: "si-10",
          type: "multiple-choice",
          question: "What is the slope of y = 8?",
          choices: ["8", "1", "0", "Undefined"],
          answer: "0",
          explanation: {
            steps: [
              "y = 8 can be written as y = 0x + 8 in slope-intercept form.",
              "The slope m = 0.",
              "This is a horizontal line at y = 8."
            ],
            tip: "y = (a number) is always a horizontal line with slope 0."
          }
        }
      ],
      guide: {
        concept: "Slope-intercept form y = mx + b is the most common way to write a linear equation. m is the slope (rate of change) and b is the y-intercept (where the line crosses the y-axis).",
        examples: [
          {
            problem: "Convert 3x + 2y = 10 to slope-intercept form.",
            steps: ["3x + 2y = 10", "2y = −3x + 10", "y = (−3/2)x + 5"],
            answer: "y = (−3/2)x + 5"
          }
        ],
        tips: [
          "m = slope, b = y-intercept in y = mx + b.",
          "To graph: plot (0, b), then use rise/run from m.",
          "Parallel lines have the same m but different b."
        ],
        commonMistakes: [
          "Confusing the slope and y-intercept: in y = 3x + 5, m = 3 (not 5).",
          "Forgetting to divide all terms by the coefficient of y when converting."
        ]
      }
    },
    {
      id: "point-slope-form",
      title: "Point-Slope Form",
      flashcards: [
        {
          front: "What is point-slope form?",
          back: "y − y₁ = m(x − x₁), where m is slope and (x₁, y₁) is a known point. Example: slope 3 through (2, 5) → y − 5 = 3(x − 2)."
        },
        {
          front: "When should you use point-slope form?",
          back: "Use it when you know the slope and one point (but not the y-intercept). Example: slope = −2, passes through (3, 1) → y − 1 = −2(x − 3)."
        },
        {
          front: "How do you convert point-slope to slope-intercept?",
          back: "Distribute and solve for y. Example: y − 5 = 3(x − 2) → y − 5 = 3x − 6 → y = 3x − 1."
        },
        {
          front: "How do you write an equation given two points?",
          back: "1) Find the slope using m = (y₂−y₁)/(x₂−x₁). 2) Use either point in point-slope form. Example: (1,2) and (3,8): m = 6/2 = 3. y − 2 = 3(x − 1)."
        },
        {
          front: "How do you write a point-slope equation from a slope and point?",
          back: "Substitute the slope for m and the point for (x₁, y₁) in y − y₁ = m(x − x₁). Example: m = −1, point (4, 3): y − 3 = −1(x − 4)."
        },
        {
          front: "How do you write a parallel line using point-slope form?",
          back: "Use the same slope as the given line and the new point. Example: parallel to y = 5x + 2 through (1, 0): slope = 5, so y − 0 = 5(x − 1) → y = 5x − 5."
        },
        {
          front: "What does each part of y − y₁ = m(x − x₁) mean?",
          back: "m = slope, (x₁, y₁) = a specific known point on the line, x and y = variables. The formula uses differences from the known point to define the line."
        }
      ],
      problems: [
        {
          id: "ps-1",
          type: "fill-in",
          question: "Write the point-slope equation for slope 4 through the point (2, 3).",
          answer: "y - 3 = 4(x - 2)",
          explanation: {
            steps: [
              "Use point-slope form: y − y₁ = m(x − x₁).",
              "Substitute m = 4, x₁ = 2, y₁ = 3.",
              "y − 3 = 4(x − 2)."
            ],
            tip: "Simply plug in the slope and the coordinates of the point."
          }
        },
        {
          id: "ps-2",
          type: "multiple-choice",
          question: "Convert y − 2 = 3(x − 1) to slope-intercept form.",
          choices: ["y = 3x − 1", "y = 3x + 1", "y = 3x − 2", "y = x + 1"],
          answer: "y = 3x − 1",
          explanation: {
            steps: [
              "Start with y − 2 = 3(x − 1).",
              "Distribute: y − 2 = 3x − 3.",
              "Add 2 to both sides: y = 3x − 3 + 2.",
              "y = 3x − 1."
            ],
            tip: "Distribute the slope, then add/subtract to isolate y."
          }
        },
        {
          id: "ps-3",
          type: "fill-in",
          question: "Write the equation in slope-intercept form through (0, 4) and (3, 10).",
          answer: "y = 2x + 4",
          explanation: {
            steps: [
              "Find slope: m = (10 − 4)/(3 − 0) = 6/3 = 2.",
              "Since (0, 4) is the y-intercept, b = 4.",
              "y = 2x + 4."
            ],
            tip: "When one point is (0, b), you can read the y-intercept directly and skip point-slope form."
          }
        },
        {
          id: "ps-4",
          type: "multiple-choice",
          question: "Which equation represents a line with slope −2 passing through (3, 5)?",
          choices: [
            "y − 5 = 2(x − 3)",
            "y + 5 = −2(x + 3)",
            "y − 5 = −2(x − 3)",
            "y − 3 = −2(x − 5)"
          ],
          answer: "y − 5 = −2(x − 3)",
          explanation: {
            steps: [
              "Point-slope form: y − y₁ = m(x − x₁).",
              "m = −2, (x₁, y₁) = (3, 5).",
              "y − 5 = −2(x − 3)."
            ],
            tip: "Substitute carefully: note y − y₁ means y minus the y-coordinate."
          }
        },
        {
          id: "ps-5",
          type: "fill-in",
          question: "Write the slope-intercept equation through (1, 1) and (4, 7).",
          answer: "y = 2x - 1",
          explanation: {
            steps: [
              "Find slope: m = (7 − 1)/(4 − 1) = 6/3 = 2.",
              "Use point-slope with (1, 1): y − 1 = 2(x − 1).",
              "Distribute: y − 1 = 2x − 2.",
              "Add 1: y = 2x − 1."
            ],
            tip: "Pick either point — you'll get the same final equation."
          }
        },
        {
          id: "ps-6",
          type: "multiple-choice",
          question: "Convert y + 3 = −(x − 5) to slope-intercept form.",
          choices: ["y = −x + 2", "y = x + 2", "y = −x − 2", "y = −x + 8"],
          answer: "y = −x + 2",
          explanation: {
            steps: [
              "y + 3 = −(x − 5).",
              "Distribute: y + 3 = −x + 5.",
              "Subtract 3: y = −x + 5 − 3.",
              "y = −x + 2."
            ],
            tip: "Distribute the negative sign carefully: −(x − 5) = −x + 5."
          }
        },
        {
          id: "ps-7",
          type: "fill-in",
          question: "Write the slope-intercept form of a line parallel to y = 3x − 4 that passes through (2, 1).",
          answer: "y = 3x - 5",
          explanation: {
            steps: [
              "Parallel lines have the same slope: m = 3.",
              "Use point-slope with (2, 1): y − 1 = 3(x − 2).",
              "Distribute: y − 1 = 3x − 6.",
              "Add 1: y = 3x − 5."
            ],
            tip: "Copy the slope from the parallel line, then plug in the new point."
          }
        },
        {
          id: "ps-8",
          type: "multiple-choice",
          question: "Which point-slope equation goes through (−2, 4) with slope 1/2?",
          choices: [
            "y + 2 = (1/2)(x − 4)",
            "y − 4 = (1/2)(x + 2)",
            "y + 4 = (1/2)(x − 2)",
            "y − 2 = (1/2)(x − 4)"
          ],
          answer: "y − 4 = (1/2)(x + 2)",
          explanation: {
            steps: [
              "y − y₁ = m(x − x₁), where m = 1/2 and (x₁, y₁) = (−2, 4).",
              "y − 4 = (1/2)(x − (−2)).",
              "y − 4 = (1/2)(x + 2)."
            ],
            tip: "Subtracting a negative in (x − x₁): x − (−2) = x + 2."
          }
        },
        {
          id: "ps-9",
          type: "fill-in",
          question: "Convert y − 6 = 2(x + 1) to slope-intercept form.",
          answer: "y = 2x + 8",
          explanation: {
            steps: [
              "Distribute: y − 6 = 2x + 2.",
              "Add 6 to both sides: y = 2x + 2 + 6.",
              "y = 2x + 8."
            ],
            tip: "Distribute first, then move the constant to the right side."
          }
        },
        {
          id: "ps-10",
          type: "multiple-choice",
          question: "What is the y-intercept of the line through (2, 7) with slope 3?",
          choices: ["7", "1", "3", "13"],
          answer: "1",
          explanation: {
            steps: [
              "Use point-slope: y − 7 = 3(x − 2).",
              "Distribute: y − 7 = 3x − 6.",
              "Add 7: y = 3x − 6 + 7 = 3x + 1.",
              "The y-intercept b = 1."
            ],
            tip: "Convert to slope-intercept form to read off the y-intercept."
          }
        }
      ],
      guide: {
        concept: "Point-slope form y − y₁ = m(x − x₁) is useful when you know the slope and one point on the line. It can always be converted to slope-intercept form by distributing and solving for y.",
        examples: [
          {
            problem: "Write the equation through (3, −1) with slope 2.",
            steps: ["y − (−1) = 2(x − 3)", "y + 1 = 2x − 6", "y = 2x − 7"],
            answer: "y = 2x − 7"
          }
        ],
        tips: [
          "Use point-slope when you don't know the y-intercept.",
          "To convert to slope-intercept: distribute, then solve for y.",
          "Given two points: find slope first, then apply point-slope."
        ],
        commonMistakes: [
          "Writing y + y₁ instead of y − y₁ — it's always subtraction in the formula.",
          "Forgetting to distribute the slope to both terms in the parentheses."
        ]
      }
    },
    {
      id: "standard-form",
      title: "Standard Form",
      flashcards: [
        {
          front: "What is standard form of a linear equation?",
          back: "Ax + By = C, where A, B, and C are integers and A ≥ 0 (A is a non-negative integer). Example: 3x + 4y = 12."
        },
        {
          front: "What are the rules for standard form?",
          back: "A must be a positive integer (no fractions, no negatives for A). Example: −2x + y = 5 is not proper standard form; multiply by −1 to get 2x − y = −5."
        },
        {
          front: "How do you convert slope-intercept to standard form?",
          back: "Move the x term to the left side. Example: y = 3x − 4 → subtract 3x: −3x + y = −4 → multiply by −1: 3x − y = 4."
        },
        {
          front: "How do you find the x-intercept from standard form?",
          back: "Set y = 0 and solve for x. Example: 2x + 5y = 10, set y = 0: 2x = 10, x = 5. x-intercept is (5, 0)."
        },
        {
          front: "How do you find the y-intercept from standard form?",
          back: "Set x = 0 and solve for y. Example: 2x + 5y = 10, set x = 0: 5y = 10, y = 2. y-intercept is (0, 2)."
        },
        {
          front: "How do you graph a line using intercepts?",
          back: "Find the x-intercept (set y = 0) and y-intercept (set x = 0), plot both points, and draw a line through them. Example: 3x + 2y = 6 → x-int: (2,0), y-int: (0,3)."
        },
        {
          front: "What is an advantage of standard form?",
          back: "Standard form makes it easy to find both intercepts quickly (just set x = 0 or y = 0). It also keeps equations as integers without fractions, useful for many problems."
        }
      ],
      problems: [
        {
          id: "sf-1",
          type: "multiple-choice",
          question: "Convert y = 2x + 5 to standard form.",
          choices: ["2x + y = 5", "2x − y = −5", "−2x + y = 5", "2x − y = 5"],
          answer: "2x − y = −5",
          explanation: {
            steps: [
              "Start with y = 2x + 5.",
              "Subtract 2x from both sides: −2x + y = 5.",
              "Multiply both sides by −1 to make A positive: 2x − y = −5.",
              "Standard form: 2x − y = −5."
            ],
            tip: "Standard form requires A to be positive. If A is negative, multiply through by −1."
          }
        },
        {
          id: "sf-2",
          type: "fill-in",
          question: "Find the x-intercept of 3x + 4y = 12. Give your answer as an ordered pair.",
          answer: "(4, 0)",
          explanation: {
            steps: [
              "Set y = 0: 3x + 4(0) = 12.",
              "Simplify: 3x = 12.",
              "Divide: x = 4.",
              "x-intercept is (4, 0)."
            ],
            tip: "x-intercept: always set y = 0 and solve."
          }
        },
        {
          id: "sf-3",
          type: "fill-in",
          question: "Find the y-intercept of 3x + 4y = 12. Give your answer as an ordered pair.",
          answer: "(0, 3)",
          explanation: {
            steps: [
              "Set x = 0: 3(0) + 4y = 12.",
              "Simplify: 4y = 12.",
              "Divide: y = 3.",
              "y-intercept is (0, 3)."
            ],
            tip: "y-intercept: always set x = 0 and solve."
          }
        },
        {
          id: "sf-4",
          type: "multiple-choice",
          question: "Which of the following is in standard form?",
          choices: ["y = −x + 3", "2x + 3y = 7", "−x + 2y = 5", "x/2 + y = 4"],
          answer: "2x + 3y = 7",
          explanation: {
            steps: [
              "Standard form is Ax + By = C with A a positive integer and no fractions.",
              "y = −x + 3 is slope-intercept form.",
              "−x + 2y = 5 has A = −1 (negative), not standard form.",
              "x/2 + y = 4 has a fraction, not allowed.",
              "2x + 3y = 7 has A = 2 (positive integer) — this is standard form."
            ],
            tip: "Check: is A positive and an integer? Are all coefficients integers?"
          }
        },
        {
          id: "sf-5",
          type: "fill-in",
          question: "Convert y = −(3/2)x + 6 to standard form (with integer coefficients).",
          answer: "3x + 2y = 12",
          explanation: {
            steps: [
              "Start with y = −(3/2)x + 6.",
              "Multiply every term by 2 to eliminate fractions: 2y = −3x + 12.",
              "Add 3x to both sides: 3x + 2y = 12.",
              "A = 3 (positive) — standard form confirmed."
            ],
            tip: "Multiply by the denominator to clear fractions first, then rearrange."
          }
        },
        {
          id: "sf-6",
          type: "multiple-choice",
          question: "Find the x-intercept of 5x − 2y = 20.",
          choices: ["(4, 0)", "(0, 4)", "(−10, 0)", "(0, −10)"],
          answer: "(4, 0)",
          explanation: {
            steps: [
              "Set y = 0: 5x − 2(0) = 20.",
              "5x = 20.",
              "x = 4.",
              "x-intercept is (4, 0)."
            ],
            tip: "Set y = 0 for the x-intercept. The x-intercept is always the point (x, 0)."
          }
        },
        {
          id: "sf-7",
          type: "fill-in",
          question: "Write the standard form equation through (1, 2) and (3, 6).",
          answer: "2x - y = 0",
          explanation: {
            steps: [
              "Find slope: m = (6 − 2)/(3 − 1) = 4/2 = 2.",
              "Use point-slope: y − 2 = 2(x − 1).",
              "Distribute: y − 2 = 2x − 2 → y = 2x.",
              "Subtract y: 0 = 2x − y → 2x − y = 0."
            ],
            tip: "Some lines in standard form have C = 0. That's valid — it just means the line passes through the origin."
          }
        },
        {
          id: "sf-8",
          type: "multiple-choice",
          question: "Convert 4x + 2y = 10 to slope-intercept form.",
          choices: ["y = 4x + 10", "y = −2x + 5", "y = 2x + 5", "y = −4x + 10"],
          answer: "y = −2x + 5",
          explanation: {
            steps: [
              "4x + 2y = 10.",
              "Subtract 4x: 2y = −4x + 10.",
              "Divide by 2: y = −2x + 5."
            ],
            tip: "Divide ALL terms by the coefficient of y."
          }
        },
        {
          id: "sf-9",
          type: "fill-in",
          question: "Find the y-intercept of 6x − 3y = 15. Give your answer as an ordered pair.",
          answer: "(0, -5)",
          explanation: {
            steps: [
              "Set x = 0: 6(0) − 3y = 15.",
              "−3y = 15.",
              "y = −5.",
              "y-intercept is (0, −5)."
            ],
            tip: "Dividing a positive by a negative gives a negative result."
          }
        },
        {
          id: "sf-10",
          type: "multiple-choice",
          question: "Which of the following is NOT a valid standard form equation?",
          choices: ["3x + y = 7", "x − 2y = −4", "−2x + 5y = 3", "x + 4y = 0"],
          answer: "−2x + 5y = 3",
          explanation: {
            steps: [
              "Standard form requires A ≥ 0 (A is non-negative).",
              "−2x + 5y = 3 has A = −2, which is negative.",
              "To fix it: multiply by −1 → 2x − 5y = −3.",
              "So −2x + 5y = 3 is NOT in proper standard form."
            ],
            tip: "If A is negative, multiply the entire equation by −1 to make it positive."
          }
        }
      ],
      guide: {
        concept: "Standard form Ax + By = C is useful for quickly finding both intercepts and for writing clean integer equations. A must be a positive integer with no fractions allowed.",
        examples: [
          {
            problem: "Graph 2x + 3y = 6 using intercepts.",
            steps: [
              "x-intercept: set y = 0 → 2x = 6 → x = 3. Point: (3, 0).",
              "y-intercept: set x = 0 → 3y = 6 → y = 2. Point: (0, 2).",
              "Plot (3, 0) and (0, 2), draw a line through both."
            ],
            answer: "x-intercept (3,0), y-intercept (0,2)"
          }
        ],
        tips: [
          "x-intercept: set y = 0. y-intercept: set x = 0.",
          "A must be a positive integer — if negative, multiply by −1.",
          "Clear fractions by multiplying through before putting in standard form."
        ],
        commonMistakes: [
          "Leaving a negative A coefficient — always make A positive.",
          "Leaving fractions in standard form — clear them by multiplying through."
        ]
      }
    }
  ]
};

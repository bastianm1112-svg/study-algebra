export const unit6 = {
  id: 6,
  title: "Exponents & Polynomials",
  emoji: "🔢",
  color: "#8e44ad",
  topics: [
    {
      id: "exponent-rules",
      title: "Exponent Rules",
      flashcards: [
        {
          front: "What is the product rule for exponents?",
          back: "xᵃ · xᵇ = xᵃ⁺ᵇ — when multiplying with the same base, add the exponents. Example: x³ · x⁵ = x³⁺⁵ = x⁸."
        },
        {
          front: "What is the quotient rule for exponents?",
          back: "xᵃ / xᵇ = xᵃ⁻ᵇ — when dividing with the same base, subtract the exponents. Example: x⁷ / x³ = x⁷⁻³ = x⁴."
        },
        {
          front: "What is the power rule for exponents?",
          back: "(xᵃ)ᵇ = xᵃ·ᵇ — when raising a power to a power, multiply the exponents. Example: (x²)⁵ = x²·⁵ = x¹⁰."
        },
        {
          front: "What is the zero exponent rule?",
          back: "x⁰ = 1 for any nonzero x. Example: 5⁰ = 1, (3x²)⁰ = 1, and (−7)⁰ = 1. The base does not matter — any nonzero base to the 0 power equals 1."
        },
        {
          front: "What is the negative exponent rule?",
          back: "x⁻ⁿ = 1/xⁿ — a negative exponent means take the reciprocal. Example: x⁻³ = 1/x³. Also: 2⁻⁴ = 1/2⁴ = 1/16."
        },
        {
          front: "What is the power of a product rule?",
          back: "(xy)ⁿ = xⁿ · yⁿ — distribute the exponent to each factor. Example: (3x²)³ = 3³ · (x²)³ = 27x⁶."
        },
        {
          front: "What is the power of a quotient rule?",
          back: "(x/y)ⁿ = xⁿ/yⁿ — distribute the exponent to both numerator and denominator. Example: (x/2)³ = x³/2³ = x³/8."
        }
      ],
      problems: [
        {
          id: "er-1",
          type: "fill-in",
          question: "Simplify: x³ · x⁵",
          answer: "x⁸",
          explanation: {
            steps: [
              "Use the product rule: xᵃ · xᵇ = xᵃ⁺ᵇ.",
              "x³ · x⁵ = x³⁺⁵.",
              "= x⁸."
            ],
            tip: "Same base, multiplying → add the exponents."
          }
        },
        {
          id: "er-2",
          type: "fill-in",
          question: "Simplify: x⁷ / x³",
          answer: "x⁴",
          explanation: {
            steps: [
              "Use the quotient rule: xᵃ / xᵇ = xᵃ⁻ᵇ.",
              "x⁷ / x³ = x⁷⁻³.",
              "= x⁴."
            ],
            tip: "Same base, dividing → subtract the exponents."
          }
        },
        {
          id: "er-3",
          type: "fill-in",
          question: "Simplify: (x²)³",
          answer: "x⁶",
          explanation: {
            steps: [
              "Use the power rule: (xᵃ)ᵇ = xᵃ·ᵇ.",
              "(x²)³ = x²·³.",
              "= x⁶."
            ],
            tip: "Power to a power → multiply the exponents."
          }
        },
        {
          id: "er-4",
          type: "fill-in",
          question: "Evaluate: 5⁰",
          answer: "1",
          explanation: {
            steps: [
              "Use the zero exponent rule: x⁰ = 1 for any nonzero x.",
              "5⁰ = 1.",
              "The base (5) doesn't matter — any nonzero number to the 0 power is 1."
            ],
            tip: "Any nonzero base raised to the 0 power always equals 1."
          }
        },
        {
          id: "er-5",
          type: "fill-in",
          question: "Simplify: (2x²)³",
          answer: "8x⁶",
          explanation: {
            steps: [
              "Use the power of a product rule: (2x²)³ = 2³ · (x²)³.",
              "Evaluate 2³ = 8.",
              "Apply power rule to x²: (x²)³ = x⁶.",
              "Result: 8x⁶."
            ],
            tip: "Raise every factor inside the parentheses to the power — both the number and the variable."
          }
        },
        {
          id: "er-6",
          type: "fill-in",
          question: "Write with a positive exponent: x⁻³",
          answer: "1/x³",
          explanation: {
            steps: [
              "Use the negative exponent rule: x⁻ⁿ = 1/xⁿ.",
              "x⁻³ = 1/x³."
            ],
            tip: "Move the base with the negative exponent to the denominator and make the exponent positive."
          }
        },
        {
          id: "er-7",
          type: "fill-in",
          question: "Simplify: (3x²y)²",
          answer: "9x⁴y²",
          explanation: {
            steps: [
              "(3x²y)² — apply the exponent to every factor.",
              "3² = 9.",
              "(x²)² = x⁴.",
              "y² = y².",
              "Result: 9x⁴y²."
            ],
            tip: "Distribute the outer exponent to the coefficient AND every variable."
          }
        },
        {
          id: "er-8",
          type: "multiple-choice",
          question: "Which is equal to (x⁴)⁰?",
          choices: ["x⁴", "0", "1", "4"],
          answer: "1",
          explanation: {
            steps: [
              "Any nonzero expression raised to the 0 power equals 1.",
              "(x⁴)⁰ = 1.",
              "Alternatively: (x⁴)⁰ = x⁴·⁰ = x⁰ = 1."
            ],
            tip: "Zero exponent always gives 1, regardless of the base."
          }
        },
        {
          id: "er-9",
          type: "fill-in",
          question: "Simplify: x⁴ · x⁻¹",
          answer: "x³",
          explanation: {
            steps: [
              "Use the product rule: x⁴ · x⁻¹ = x⁴⁺⁽⁻¹⁾.",
              "= x⁴⁻¹.",
              "= x³."
            ],
            tip: "The product rule works with negative exponents too — just add the exponents."
          }
        },
        {
          id: "er-10",
          type: "multiple-choice",
          question: "Simplify: (2³)² · 2⁰",
          choices: ["64", "32", "128", "1"],
          answer: "64",
          explanation: {
            steps: [
              "Evaluate (2³)² using the power rule: 2³·² = 2⁶.",
              "Evaluate 2⁰ = 1.",
              "2⁶ · 1 = 64."
            ],
            tip: "Simplify each part first, then multiply."
          }
        }
      ],
      guide: {
        concept: "Exponent rules govern how to simplify expressions with powers. The key rules are: product (add exponents), quotient (subtract exponents), power rule (multiply exponents), zero exponent (= 1), and negative exponents (flip to reciprocal).",
        examples: [
          {
            problem: "Simplify (4x³)².",
            steps: ["Apply the power of a product rule: 4² · (x³)².", "4² = 16.", "(x³)² = x⁶.", "Result: 16x⁶."],
            answer: "16x⁶"
          }
        ],
        tips: [
          "Product rule: same base + multiplying → ADD exponents.",
          "Quotient rule: same base + dividing → SUBTRACT exponents.",
          "Power rule: power to a power → MULTIPLY exponents.",
          "x⁰ = 1. x⁻ⁿ = 1/xⁿ."
        ],
        commonMistakes: [
          "Adding bases instead of exponents: x² · x³ ≠ x⁶ (that would be multiplying bases). Correct: x⁵.",
          "Forgetting to raise the coefficient to the power: (2x)³ = 8x³, not 2x³.",
          "Thinking x⁰ = 0 — it always equals 1 (for nonzero x)."
        ]
      }
    },
    {
      id: "multiplying-monomials",
      title: "Multiplying & Dividing Monomials",
      flashcards: [
        {
          front: "What is a monomial?",
          back: "A single term: a number, a variable, or a product of numbers and variables. Examples: 5, x, 3x², −7x²y³. NOT a monomial: x + 2 (that's a binomial)."
        },
        {
          front: "How do you multiply monomials?",
          back: "Multiply the coefficients together, then multiply the variables using the product rule (add exponents for same base). Example: (3x²)(4x³) = (3·4)(x²⁺³) = 12x⁵."
        },
        {
          front: "How do you divide monomials?",
          back: "Divide the coefficients, then divide the variables by subtracting exponents (quotient rule). Example: 12x⁵ ÷ 4x² = (12÷4)(x⁵⁻²) = 3x³."
        },
        {
          front: "How do you multiply monomials with multiple variables?",
          back: "Multiply coefficients, then handle each variable base separately (add exponents). Example: (2x³y²)(5xy⁴) = (2·5)(x³⁺¹)(y²⁺⁴) = 10x⁴y⁶."
        },
        {
          front: "How does scientific notation connect to monomial multiplication?",
          back: "Scientific notation uses the same rules: multiply coefficients and add exponents of 10. Example: (3 × 10⁴)(2 × 10³) = 6 × 10⁷."
        },
        {
          front: "How do you simplify a monomial completely?",
          back: "Apply all exponent rules and make sure no negative exponents remain. Example: (4x²y)(3xy²) = 12x³y³. Check: are all exponents positive? Is everything combined?"
        },
        {
          front: "What happens to exponents when you divide monomials with multiple variables?",
          back: "Subtract exponents for each variable base separately. Example: (6x²y³)/(3xy) = (6/3)(x²⁻¹)(y³⁻¹) = 2xy²."
        }
      ],
      problems: [
        {
          id: "mm-1",
          type: "fill-in",
          question: "Simplify: (3x²)(4x³)",
          answer: "12x⁵",
          explanation: {
            steps: [
              "Multiply the coefficients: 3 · 4 = 12.",
              "Multiply the variables (add exponents): x² · x³ = x²⁺³ = x⁵.",
              "Result: 12x⁵."
            ],
            tip: "Multiply coefficients separately from variables."
          }
        },
        {
          id: "mm-2",
          type: "fill-in",
          question: "Simplify: (2x³y²)(5xy⁴)",
          answer: "10x⁴y⁶",
          explanation: {
            steps: [
              "Multiply coefficients: 2 · 5 = 10.",
              "Multiply x terms: x³ · x¹ = x³⁺¹ = x⁴.",
              "Multiply y terms: y² · y⁴ = y²⁺⁴ = y⁶.",
              "Result: 10x⁴y⁶."
            ],
            tip: "Handle each variable base separately."
          }
        },
        {
          id: "mm-3",
          type: "fill-in",
          question: "Simplify: 12x⁵ ÷ 4x²",
          answer: "3x³",
          explanation: {
            steps: [
              "Divide the coefficients: 12 ÷ 4 = 3.",
              "Divide the variables (subtract exponents): x⁵ ÷ x² = x⁵⁻² = x³.",
              "Result: 3x³."
            ],
            tip: "Divide coefficients and subtract exponents for the same base."
          }
        },
        {
          id: "mm-4",
          type: "fill-in",
          question: "Simplify: (6x²y³) / (3xy)",
          answer: "2xy²",
          explanation: {
            steps: [
              "Divide the coefficients: 6 ÷ 3 = 2.",
              "Divide x terms: x² ÷ x¹ = x²⁻¹ = x.",
              "Divide y terms: y³ ÷ y¹ = y³⁻¹ = y².",
              "Result: 2xy²."
            ],
            tip: "Subtract exponents for each variable separately."
          }
        },
        {
          id: "mm-5",
          type: "fill-in",
          question: "Simplify: (−2x³)²",
          answer: "4x⁶",
          explanation: {
            steps: [
              "Apply the power of a product rule: (−2)² · (x³)².",
              "(−2)² = 4 (negative squared is positive).",
              "(x³)² = x⁶.",
              "Result: 4x⁶."
            ],
            tip: "A negative number squared gives a positive result: (−2)² = 4."
          }
        },
        {
          id: "mm-6",
          type: "fill-in",
          question: "Simplify: (5x²)(2x) / (10x²)",
          answer: "x",
          explanation: {
            steps: [
              "Multiply the numerator: (5x²)(2x) = 10x³.",
              "Divide: 10x³ / 10x² = (10/10)(x³⁻²) = 1 · x = x.",
              "Result: x."
            ],
            tip: "Multiply first, then divide. Simplify the coefficient to 1 (which doesn't need to be written)."
          }
        },
        {
          id: "mm-7",
          type: "multiple-choice",
          question: "Which is equal to (4x⁴)(3x⁵)?",
          choices: ["7x⁹", "12x⁹", "12x²⁰", "7x²⁰"],
          answer: "12x⁹",
          explanation: {
            steps: [
              "Multiply coefficients: 4 · 3 = 12.",
              "Multiply x terms: x⁴ · x⁵ = x⁴⁺⁵ = x⁹.",
              "Result: 12x⁹."
            ],
            tip: "Multiply coefficients and ADD (not multiply) the exponents."
          }
        },
        {
          id: "mm-8",
          type: "fill-in",
          question: "Simplify: 15x⁸ / 3x³",
          answer: "5x⁵",
          explanation: {
            steps: [
              "Divide the coefficients: 15 / 3 = 5.",
              "Subtract the exponents: x⁸ / x³ = x⁸⁻³ = x⁵.",
              "Result: 5x⁵."
            ],
            tip: "Division of like bases: subtract the exponents."
          }
        },
        {
          id: "mm-9",
          type: "fill-in",
          question: "Simplify: (3x²y)(4x³y²)",
          answer: "12x⁵y³",
          explanation: {
            steps: [
              "Multiply coefficients: 3 · 4 = 12.",
              "Multiply x terms: x² · x³ = x⁵.",
              "Multiply y terms: y · y² = y³.",
              "Result: 12x⁵y³."
            ],
            tip: "Group coefficients and variables separately, then combine."
          }
        },
        {
          id: "mm-10",
          type: "multiple-choice",
          question: "Simplify: 24x⁶y⁴ / 8x²y",
          choices: ["3x³y³", "3x⁴y³", "16x⁴y³", "3x³y⁴"],
          answer: "3x⁴y³",
          explanation: {
            steps: [
              "Divide coefficients: 24 / 8 = 3.",
              "Divide x terms: x⁶ / x² = x⁶⁻² = x⁴.",
              "Divide y terms: y⁴ / y¹ = y⁴⁻¹ = y³.",
              "Result: 3x⁴y³."
            ],
            tip: "Treat each base independently when dividing monomials."
          }
        }
      ],
      guide: {
        concept: "To multiply monomials: multiply the coefficients and add exponents of like bases. To divide monomials: divide the coefficients and subtract exponents of like bases. Handle each variable separately.",
        examples: [
          {
            problem: "Simplify: (4x²y)(3x³y²) / (6xy³)",
            steps: [
              "Multiply numerator: (4·3)(x²⁺³)(y¹⁺²) = 12x⁵y³.",
              "Divide: 12x⁵y³ / 6xy³ = (12/6)(x⁵⁻¹)(y³⁻³) = 2x⁴y⁰.",
              "y⁰ = 1, so result = 2x⁴."
            ],
            answer: "2x⁴"
          }
        ],
        tips: [
          "Multiply coefficients together; use product rule for variables.",
          "Divide coefficients; use quotient rule for variables.",
          "Watch for zero exponents: y⁰ = 1."
        ],
        commonMistakes: [
          "Multiplying exponents when you should be adding: x² · x³ = x⁵, not x⁶.",
          "Not simplifying the coefficient: leaving 12/4 as a fraction instead of 3."
        ]
      }
    },
    {
      id: "adding-polynomials",
      title: "Adding & Subtracting Polynomials",
      flashcards: [
        {
          front: "What is a polynomial?",
          back: "An expression with one or more terms where variables have non-negative integer exponents. Examples: 5x² + 3x − 2 (trinomial), 4x + 1 (binomial), 7 (monomial). Not a polynomial: 1/x or x^(1/2)."
        },
        {
          front: "What is the degree of a polynomial?",
          back: "The highest exponent of the variable in the polynomial. Example: 5x³ − 2x + 9 has degree 3. For 4x² + x − 7, the degree is 2."
        },
        {
          front: "What are like terms?",
          back: "Terms with the same variable(s) and the same exponent(s). Example: 3x² and −7x² are like terms (both x²). But 3x² and 3x are NOT like terms (different exponents)."
        },
        {
          front: "How do you combine like terms?",
          back: "Add or subtract the coefficients, keeping the variable part the same. Example: 5x² + 3x² = 8x². And 7x − 2x = 5x."
        },
        {
          front: "How do you add polynomials?",
          back: "Line up like terms and add the coefficients. Example: (3x² + 2x − 1) + (x² − 5x + 4) = (3+1)x² + (2−5)x + (−1+4) = 4x² − 3x + 3."
        },
        {
          front: "How do you subtract polynomials?",
          back: "Distribute the negative sign to every term in the second polynomial, then combine like terms. Example: (4x² + 3) − (x² − 2) = 4x² + 3 − x² + 2 = 3x² + 5."
        },
        {
          front: "What is standard form of a polynomial?",
          back: "Writing terms in order from highest degree to lowest degree. Example: 5 + 3x − 2x³ + x² written in standard form is −2x³ + x² + 3x + 5."
        }
      ],
      problems: [
        {
          id: "ap-1",
          type: "fill-in",
          question: "Simplify: (3x² + 2x − 1) + (x² − 5x + 4)",
          answer: "4x² - 3x + 3",
          explanation: {
            steps: [
              "Group like terms: (3x² + x²) + (2x − 5x) + (−1 + 4).",
              "3x² + x² = 4x².",
              "2x − 5x = −3x.",
              "−1 + 4 = 3.",
              "Result: 4x² − 3x + 3."
            ],
            tip: "Add the coefficients of each group of like terms separately."
          }
        },
        {
          id: "ap-2",
          type: "fill-in",
          question: "Simplify: (4x² − 3x) − (2x² + x − 7)",
          answer: "2x² - 4x + 7",
          explanation: {
            steps: [
              "Distribute the negative: 4x² − 3x − 2x² − x + 7.",
              "Group like terms: (4x² − 2x²) + (−3x − x) + 7.",
              "2x² − 4x + 7.",
              "Result: 2x² − 4x + 7."
            ],
            tip: "Subtraction: flip the sign of EVERY term in the second polynomial, then add."
          }
        },
        {
          id: "ap-3",
          type: "fill-in",
          question: "What is the degree of the polynomial 5x³ − 2x + 9?",
          answer: "3",
          explanation: {
            steps: [
              "Identify the exponents: 3, 1, and 0 (constant has degree 0).",
              "The highest exponent is 3.",
              "The degree is 3."
            ],
            tip: "The degree is the largest exponent in the polynomial."
          }
        },
        {
          id: "ap-4",
          type: "fill-in",
          question: "Write in standard form: −4 + x² + 3x",
          answer: "x² + 3x - 4",
          explanation: {
            steps: [
              "Standard form: arrange terms from highest to lowest degree.",
              "Degrees: x² (degree 2), 3x (degree 1), −4 (degree 0).",
              "Standard form: x² + 3x − 4."
            ],
            tip: "Standard form means highest exponent first, then descending."
          }
        },
        {
          id: "ap-5",
          type: "multiple-choice",
          question: "Which terms are like terms?",
          choices: ["3x² and 3x", "5x and −2x", "4x² and 4y²", "2x³ and 2x²"],
          answer: "5x and −2x",
          explanation: {
            steps: [
              "Like terms have the same variable AND the same exponent.",
              "3x² and 3x: different exponents (2 vs 1) — NOT like terms.",
              "5x and −2x: both have x¹ — these ARE like terms.",
              "4x² and 4y²: different variables — NOT like terms.",
              "2x³ and 2x²: different exponents — NOT like terms."
            ],
            tip: "Like terms: same variable, same exponent. Only the coefficient can differ."
          }
        },
        {
          id: "ap-6",
          type: "fill-in",
          question: "Simplify: (2x³ − x + 5) + (−3x³ + 4x − 2)",
          answer: "-x³ + 3x + 3",
          explanation: {
            steps: [
              "Group like terms: (2x³ − 3x³) + (−x + 4x) + (5 − 2).",
              "2x³ − 3x³ = −x³.",
              "−x + 4x = 3x.",
              "5 − 2 = 3.",
              "Result: −x³ + 3x + 3."
            ],
            tip: "Watch signs carefully when combining terms with negative coefficients."
          }
        },
        {
          id: "ap-7",
          type: "fill-in",
          question: "Simplify: (6x² − 2x + 1) − (3x² + 2x − 4)",
          answer: "3x² - 4x + 5",
          explanation: {
            steps: [
              "Distribute the negative: 6x² − 2x + 1 − 3x² − 2x + 4.",
              "Group: (6x² − 3x²) + (−2x − 2x) + (1 + 4).",
              "3x² − 4x + 5.",
              "Result: 3x² − 4x + 5."
            ],
            tip: "Distribute the minus sign to ALL terms: −(3x² + 2x − 4) = −3x² − 2x + 4."
          }
        },
        {
          id: "ap-8",
          type: "multiple-choice",
          question: "What is the degree of 7?",
          choices: ["7", "1", "0", "Undefined"],
          answer: "0",
          explanation: {
            steps: [
              "7 can be written as 7x⁰.",
              "The exponent is 0.",
              "The degree of a constant is 0."
            ],
            tip: "All constants (numbers with no variables) have degree 0."
          }
        },
        {
          id: "ap-9",
          type: "fill-in",
          question: "Simplify: (5x + 3) + (2x − 7)",
          answer: "7x - 4",
          explanation: {
            steps: [
              "Group like terms: (5x + 2x) + (3 − 7).",
              "5x + 2x = 7x.",
              "3 − 7 = −4.",
              "Result: 7x − 4."
            ],
            tip: "Combine x terms and constants separately."
          }
        },
        {
          id: "ap-10",
          type: "fill-in",
          question: "Simplify: (3x² + 7) − (x² − 3)",
          answer: "2x² + 10",
          explanation: {
            steps: [
              "Distribute the negative: 3x² + 7 − x² + 3.",
              "Group: (3x² − x²) + (7 + 3).",
              "2x² + 10.",
              "Result: 2x² + 10."
            ],
            tip: "Subtracting (x² − 3) means −x² + 3 — both signs change."
          }
        }
      ],
      guide: {
        concept: "Polynomials are added or subtracted by combining like terms — terms with the same variable and same exponent. When subtracting, distribute the negative sign to all terms in the second polynomial first.",
        examples: [
          {
            problem: "Simplify: (2x² + 5x − 3) − (x² − 2x + 1).",
            steps: [
              "Distribute the negative: 2x² + 5x − 3 − x² + 2x − 1.",
              "Group like terms: (2x² − x²) + (5x + 2x) + (−3 − 1).",
              "x² + 7x − 4."
            ],
            answer: "x² + 7x − 4"
          }
        ],
        tips: [
          "Like terms: same variable AND same exponent.",
          "Subtraction: flip every sign in the second polynomial.",
          "Standard form: write from highest degree to lowest."
        ],
        commonMistakes: [
          "Only changing the sign of the first term when subtracting — change ALL signs.",
          "Combining unlike terms: 3x² + 3x ≠ 6x² — these are not like terms.",
          "Forgetting that the degree of a constant is 0, not undefined."
        ]
      }
    },
    {
      id: "multiplying-polynomials",
      title: "Multiplying Polynomials (FOIL)",
      flashcards: [
        {
          front: "What is the FOIL method?",
          back: "A strategy for multiplying two binomials: First, Outer, Inner, Last. Example: (x+3)(x+5) = x·x + x·5 + 3·x + 3·5 = x² + 5x + 3x + 15 = x² + 8x + 15."
        },
        {
          front: "How do you distribute a monomial to a polynomial?",
          back: "Multiply the monomial by every term in the polynomial. Example: 3x(2x² − 5x + 1) = 3x·2x² + 3x·(−5x) + 3x·1 = 6x³ − 15x² + 3x."
        },
        {
          front: "How do you multiply binomials using FOIL?",
          back: "F: first terms, O: outer terms, I: inner terms, L: last terms. Then combine like terms. Example: (2x−1)(x+4): F=2x², O=8x, I=−x, L=−4. Result: 2x² + 7x − 4."
        },
        {
          front: "How do you multiply a binomial by a trinomial?",
          back: "Distribute each term of the binomial to every term of the trinomial. Example: (x+2)(x²−3x+1) = x(x²−3x+1) + 2(x²−3x+1) = x³−3x²+x + 2x²−6x+2 = x³−x²−5x+2."
        },
        {
          front: "What is the special product (a+b)²?",
          back: "(a+b)² = a² + 2ab + b². Example: (x+3)² = x² + 2(x)(3) + 3² = x² + 6x + 9. Don't just square each term — the middle term 2ab is critical."
        },
        {
          front: "What is the special product (a−b)²?",
          back: "(a−b)² = a² − 2ab + b². Example: (x−4)² = x² − 2(x)(4) + 4² = x² − 8x + 16."
        },
        {
          front: "What is the difference of squares pattern?",
          back: "(a+b)(a−b) = a² − b². The middle terms cancel out. Example: (x+4)(x−4) = x² − 16. This is a shortcut — no need to FOIL fully."
        }
      ],
      problems: [
        {
          id: "mp-1",
          type: "fill-in",
          question: "Multiply using FOIL: (x + 3)(x + 5)",
          answer: "x² + 8x + 15",
          explanation: {
            steps: [
              "First: x · x = x².",
              "Outer: x · 5 = 5x.",
              "Inner: 3 · x = 3x.",
              "Last: 3 · 5 = 15.",
              "Combine: x² + 5x + 3x + 15 = x² + 8x + 15."
            ],
            tip: "FOIL: First, Outer, Inner, Last. Then combine like terms (Outer + Inner)."
          }
        },
        {
          id: "mp-2",
          type: "fill-in",
          question: "Multiply using FOIL: (2x − 1)(x + 4)",
          answer: "2x² + 7x - 4",
          explanation: {
            steps: [
              "First: 2x · x = 2x².",
              "Outer: 2x · 4 = 8x.",
              "Inner: −1 · x = −x.",
              "Last: −1 · 4 = −4.",
              "Combine: 2x² + 8x − x − 4 = 2x² + 7x − 4."
            ],
            tip: "Watch the signs on each term — inner term is −1 · x = −x."
          }
        },
        {
          id: "mp-3",
          type: "fill-in",
          question: "Expand using the special product formula: (x + 3)²",
          answer: "x² + 6x + 9",
          explanation: {
            steps: [
              "Use (a + b)² = a² + 2ab + b².",
              "a = x, b = 3.",
              "a² = x².",
              "2ab = 2(x)(3) = 6x.",
              "b² = 9.",
              "Result: x² + 6x + 9."
            ],
            tip: "Don't forget the middle term 2ab — (x+3)² ≠ x² + 9."
          }
        },
        {
          id: "mp-4",
          type: "fill-in",
          question: "Multiply using the difference of squares: (x − 4)(x + 4)",
          answer: "x² - 16",
          explanation: {
            steps: [
              "Use (a − b)(a + b) = a² − b².",
              "a = x, b = 4.",
              "x² − 4² = x² − 16.",
              "Result: x² − 16."
            ],
            tip: "Difference of squares: the middle terms always cancel. Result is always a² − b²."
          }
        },
        {
          id: "mp-5",
          type: "fill-in",
          question: "Distribute: 3x(2x² − 5x + 1)",
          answer: "6x³ - 15x² + 3x",
          explanation: {
            steps: [
              "Multiply 3x by each term.",
              "3x · 2x² = 6x³.",
              "3x · (−5x) = −15x².",
              "3x · 1 = 3x.",
              "Result: 6x³ − 15x² + 3x."
            ],
            tip: "Distribute the monomial to EVERY term. Don't miss any."
          }
        },
        {
          id: "mp-6",
          type: "fill-in",
          question: "Expand: (x − 4)²",
          answer: "x² - 8x + 16",
          explanation: {
            steps: [
              "Use (a − b)² = a² − 2ab + b².",
              "a = x, b = 4.",
              "a² = x².",
              "2ab = 2(x)(4) = 8x.",
              "b² = 16.",
              "Result: x² − 8x + 16."
            ],
            tip: "Don't skip the middle term: (x−4)² ≠ x² + 16."
          }
        },
        {
          id: "mp-7",
          type: "fill-in",
          question: "Multiply: (x + 2)(x² − 3x + 1)",
          answer: "x³ - x² - 5x + 2",
          explanation: {
            steps: [
              "Distribute x: x · x² = x³, x · (−3x) = −3x², x · 1 = x.",
              "Distribute 2: 2 · x² = 2x², 2 · (−3x) = −6x, 2 · 1 = 2.",
              "Combine: x³ + (−3x² + 2x²) + (x − 6x) + 2.",
              "= x³ − x² − 5x + 2."
            ],
            tip: "Distribute each term of the binomial to all three terms of the trinomial."
          }
        },
        {
          id: "mp-8",
          type: "multiple-choice",
          question: "Which is the correct expansion of (x + 5)(x − 2)?",
          choices: ["x² − 3x − 10", "x² + 3x − 10", "x² − 10", "x² + 3x + 10"],
          answer: "x² + 3x − 10",
          explanation: {
            steps: [
              "F: x · x = x².",
              "O: x · (−2) = −2x.",
              "I: 5 · x = 5x.",
              "L: 5 · (−2) = −10.",
              "Combine: x² + (−2x + 5x) − 10 = x² + 3x − 10."
            ],
            tip: "Outer + Inner: −2x + 5x = +3x. Watch the sign on the Last term."
          }
        },
        {
          id: "mp-9",
          type: "fill-in",
          question: "Multiply: (3x − 2)(3x + 2)",
          answer: "9x² - 4",
          explanation: {
            steps: [
              "Recognize the difference of squares pattern: (a − b)(a + b) = a² − b².",
              "a = 3x, b = 2.",
              "(3x)² − 2² = 9x² − 4.",
              "Result: 9x² − 4."
            ],
            tip: "Any time you see (A + B)(A − B), use the shortcut a² − b²."
          }
        },
        {
          id: "mp-10",
          type: "fill-in",
          question: "Expand: (2x + 1)²",
          answer: "4x² + 4x + 1",
          explanation: {
            steps: [
              "Use (a + b)² = a² + 2ab + b².",
              "a = 2x, b = 1.",
              "a² = (2x)² = 4x².",
              "2ab = 2(2x)(1) = 4x.",
              "b² = 1² = 1.",
              "Result: 4x² + 4x + 1."
            ],
            tip: "When a has a coefficient, square the whole thing: (2x)² = 4x²."
          }
        }
      ],
      guide: {
        concept: "FOIL multiplies two binomials by distributing each term. For larger polynomials, distribute every term in the first polynomial to every term in the second. Special patterns like (a+b)², (a−b)², and (a+b)(a−b) provide shortcuts.",
        examples: [
          {
            problem: "Multiply (x − 2)(x + 7).",
            steps: [
              "F: x · x = x².",
              "O: x · 7 = 7x.",
              "I: −2 · x = −2x.",
              "L: −2 · 7 = −14.",
              "Combine: x² + 5x − 14."
            ],
            answer: "x² + 5x − 14"
          }
        ],
        tips: [
          "FOIL only works for two binomials. For more terms, use full distribution.",
          "(a+b)² = a² + 2ab + b² — never forget the middle term.",
          "(a+b)(a−b) = a² − b² — the middle terms cancel."
        ],
        commonMistakes: [
          "(x+3)² ≠ x² + 9 — you must include the 2ab middle term: x² + 6x + 9.",
          "Forgetting to combine like terms after FOIL.",
          "Sign errors on the Last term when both signs are negative: (−a)(−b) = +ab."
        ]
      }
    }
  ]
};

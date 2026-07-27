/* ==========================================================================
   FLIGHT PLAN — shared logic
   Everything is stored in localStorage so state carries across pages:
     fp_fullname   -> her typed full name
     fp_nickname   -> "Oenone A." (derived, used as the FA name-tag)
     fp_score      -> quiz score (0-10)
     fp_passed     -> "true" / "false"
     fp_essay      -> her written future-plan text (if she didn't pass)
   ========================================================================== */

const FP = {
  ANSWER_NAME: "OENONE ANAVIE A. ABUYEN", // full name she must type, uppercase for comparison
  NICK: "Oenone A.",
  PASS_MARK: 8,
  TOTAL_QUESTIONS: 10,

  get(key){ return localStorage.getItem(key); },
  set(key, val){ localStorage.setItem(key, val); },

  requireName(){
    // Call this at the top of every page after login. Sends her back to the
    // login page if she somehow lands here without signing in first.
    if(!this.get('fp_fullname')){
      window.location.href = 'index.html';
    }
  },

  goldenTicketSeat(){
    // A little flavor detail for the boarding-pass stub: a seat number that
    // is stable for the session (derived, not random) so it doesn't change
    // on refresh.
    if(!this.get('fp_seat')){
      const letters = 'ABCDEF';
      const seat = (3 + (this.get('fp_fullname')||'').length % 27) + letters[(this.get('fp_fullname')||'').length % 6];
      this.set('fp_seat', seat);
    }
    return this.get('fp_seat');
  }
};

/* --------------------------------------------------------------------------
   QUIZ BANK — 10 tourism / flight-attendant knowledge questions.
   Feel free to edit the text, options, or correctIndex (0-based) below.
   -------------------------------------------------------------------------- */
const QUIZ = [
  {
    q: "What does “IATA” stand for?",
    options: [
      "International Air Transport Association",
      "Inter-Airline Travel Agency",
      "International Airport Traffic Authority",
      "Institute of Aviation and Tourism Affairs"
    ],
    correct: 0
  },
  {
    q: "In tourism, what is a “PAX” count referring to?",
    options: [
      "Passenger count",
      "Package tax",
      "Parking allowance",
      "Airport code prefix"
    ],
    correct: 0
  },
  {
    q: "What is the primary duty of a flight attendant during a flight?",
    options: [
      "Serving meals only",
      "Passenger safety and emergency response",
      "Selling duty-free items",
      "Piloting assistance"
    ],
    correct: 1
  },
  {
    q: "Which document is required for international travel in almost all cases?",
    options: [
      "Passport",
      "Barangay clearance",
      "School ID",
      "Voter's ID"
    ],
    correct: 0
  },
  {
    q: "What does “layover” mean in air travel?",
    options: [
      "A cancelled flight",
      "A stop between connecting flights",
      "A type of airplane seat",
      "An in-flight meal service"
    ],
    correct: 1
  },
  {
    q: "The safety demonstration before takeoff mainly teaches passengers about:",
    options: [
      "Boarding order",
      "Emergency exits and equipment use",
      "Baggage fees",
      "Meal choices"
    ],
    correct: 1
  },
  {
    q: "What is the meaning of “FA” in the aviation industry?",
    options: [
      "Frequent Arrival",
      "Flight Attendant",
      "Final Approach",
      "Flight Authorization"
    ],
    correct: 1
  },
  {
    q: "Which of these is considered a core value in hospitality and tourism service?",
    options: [
      "Speed over accuracy",
      "Genuine guest care and attentiveness",
      "Avoiding guest interaction",
      "Following scripts only"
    ],
    correct: 1
  },
  {
    q: "What is a “brace position” used for on an aircraft?",
    options: [
      "Boarding faster",
      "Improving posture during meals",
      "Protecting passengers during an emergency landing",
      "Helping with turbulence-related nausea"
    ],
    correct: 2
  },
  {
    q: "Dubai's main airline, often associated with career opportunities for Filipino flight attendants, is:",
    options: [
      "Emirates",
      "Qantas",
      "Ryanair",
      "Southwest Airlines"
    ],
    correct: 0
  }
];

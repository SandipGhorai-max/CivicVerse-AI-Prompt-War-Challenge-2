/**
 * CivicVerse AI – Test Suite
 * Run this in the browser console or with Node.js
 */

const RunTests = () => {
  console.log("🚀 Starting CivicVerse AI Logic Tests...");

  // 1. Test XP Calculation
  console.log("Test 1: XP Calculation");
  const initialXP = UserProfiling.state.xp;
  UserProfiling.addXP(50);
  if (UserProfiling.state.xp === initialXP + 50) {
    console.log("✅ XP Calculation Passed");
  } else {
    console.warn("❌ XP Calculation Failed");
  }

  // 2. Test Misinformation Shield
  console.log("Test 2: Misinformation Shield Detection");
  const myth = "My single vote doesn't matter.";
  const detection = KnowledgeEngine.detectMisinformation(myth);
  if (detection && detection.correction) {
    console.log("✅ Misinformation Shield Detection Passed");
  } else {
    console.warn("❌ Misinformation Shield Detection Failed");
  }

  // 3. Test Booth Locator Logic
  console.log("Test 3: Booth Locator Logic");
  const location = KnowledgeEngine.getBoothLocation("12345");
  if (location && location.address) {
    console.log("✅ Booth Locator Logic Passed");
  } else {
    console.warn("❌ Booth Locator Logic Failed");
  }

  console.log("🏁 All tests completed.");
};

// Export if in Node, otherwise attach to window
if (typeof window !== 'undefined') {
  window.RunTests = RunTests;
} else {
  // Mock objects for Node environment testing if needed
  global.UserProfiling = { state: { xp: 0 }, addXP: (n) => { UserProfiling.state.xp += n; } };
  global.KnowledgeEngine = { 
    detectMisinformation: (s) => ({ correction: "test" }),
    getBoothLocation: (z) => ({ address: "test" })
  };
  RunTests();
}

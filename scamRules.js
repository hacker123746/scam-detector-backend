module.exports = function detect(url, type) {

  const pakScamKeywords = [
    "registration-fee",
    "online-earning-pk",
    "ehsaas",
    "benazir",
    "nadra",
    "gov-pk",
    "apply-now"
  ];

  for (let word of pakScamKeywords) {
    if (url.toLowerCase().includes(word)) {
      return {
        status: "SCAM",
        risk: "HIGH",
        reason: "Pakistani scam keyword detected"
      };
    }
  }

  if (!url.startsWith("https")) {
    return {
      status: "SUSPICIOUS",
      risk: "MEDIUM",
      reason: "No HTTPS / SSL certificate"
    };
  }

  return {
    status: "SAFE",
    risk: "LOW",
    reason: "No scam patterns found"
  };
};
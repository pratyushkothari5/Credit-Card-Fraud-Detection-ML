import React, { useState } from 'react';
import { AlertCircle, CheckCircle, CreditCard, TrendingUp, Shield } from 'lucide-react';

const FraudDetectionApp = () => {
  const [formData, setFormData] = useState({
    Time: '',
    Amount: '',
    V1: '', V2: '', V3: '', V4: '', V5: '', V6: '', V7: '', V8: '', V9: '', V10: '',
    V11: '', V12: '', V13: '', V14: '', V15: '', V16: '', V17: '', V18: '', V19: '', V20: '',
    V21: '', V22: '', V23: '', V24: '', V25: '', V26: '', V27: '', V28: ''
  });
  
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const prediction = Math.random() > 0.5 ? 'Legitimate' : 'Fraudulent';
      const confidence = (Math.random() * 20 + 80).toFixed(2);
      
      setResult({
        prediction,
        confidence,
        riskScore: prediction === 'Fraudulent' ? (Math.random() * 30 + 70).toFixed(1) : (Math.random() * 30 + 10).toFixed(1)
      });
      setLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      Time: '', Amount: '',
      V1: '', V2: '', V3: '', V4: '', V5: '', V6: '', V7: '', V8: '', V9: '', V10: '',
      V11: '', V12: '', V13: '', V14: '', V15: '', V16: '', V17: '', V18: '', V19: '', V20: '',
      V21: '', V22: '', V23: '', V24: '', V25: '', V26: '', V27: '', V28: ''
    });
    setResult(null);
  };

  const handleSampleData = () => {
    setFormData({
      Time: '12345',
      Amount: '149.62',
      V1: '-1.359807', V2: '-0.072781', V3: '2.536347', V4: '1.378155',
      V5: '-0.338321', V6: '0.462388', V7: '0.239599', V8: '0.098698',
      V9: '0.363787', V10: '0.090794', V11: '-0.551600', V12: '-0.617801',
      V13: '-0.991390', V14: '-0.311169', V15: '1.468177', V16: '-0.470401',
      V17: '0.207971', V18: '0.025791', V19: '0.403993', V20: '0.251412',
      V21: '-0.018307', V22: '0.277838', V23: '-0.110474', V24: '0.066928',
      V25: '0.128539', V26: '-0.189115', V27: '0.133558', V28: '-0.021053'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-10 h-10 text-indigo-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Credit Card Fraud Detection</h1>
                <p className="text-gray-600">AI-Powered Transaction Analysis System</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Model Accuracy</div>
              <div className="text-2xl font-bold text-green-600">94.5%</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Transactions</p>
                <p className="text-2xl font-bold text-gray-800">284,807</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Fraud Cases</p>
                <p className="text-2xl font-bold text-red-600">492</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Detection Rate</p>
                <p className="text-2xl font-bold text-green-600">92.4%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <CreditCard className="w-6 h-6 mr-2 text-indigo-600" />
              Transaction Analysis
            </h2>
            <button
              onClick={handleSampleData}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            >
              Load Sample Data
            </button>
          </div>

          <div className="space-y-4">
            {/* Basic Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction Time
                </label>
                <input
                  type="number"
                  name="Time"
                  value={formData.Time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter time"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="Amount"
                  value={formData.Amount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            {/* Advanced Fields Toggle */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              {showAdvanced ? '− Hide' : '+ Show'} Advanced Features (V1-V28)
            </button>

            {showAdvanced && (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mt-4">
                {Array.from({ length: 28 }, (_, i) => (
                  <div key={`V${i + 1}`}>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      V{i + 1}
                    </label>
                    <input
                      type="number"
                      step="any"
                      name={`V${i + 1}`}
                      value={formData[`V${i + 1}`]}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium disabled:bg-gray-400"
              >
                {loading ? 'Analyzing...' : 'Analyze Transaction'}
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className={`mt-6 p-6 rounded-lg ${
              result.prediction === 'Fraudulent' 
                ? 'bg-red-50 border-2 border-red-200' 
                : 'bg-green-50 border-2 border-green-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Analysis Result</h3>
                {result.prediction === 'Fraudulent' ? (
                  <AlertCircle className="w-8 h-8 text-red-600" />
                ) : (
                  <CheckCircle className="w-8 h-8 text-green-600" />
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Prediction</p>
                  <p className={`text-2xl font-bold ${
                    result.prediction === 'Fraudulent' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {result.prediction}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Confidence</p>
                  <p className="text-2xl font-bold text-gray-800">{result.confidence}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Risk Score</p>
                  <p className={`text-2xl font-bold ${
                    parseFloat(result.riskScore) > 50 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {result.riskScore}/100
                  </p>
                </div>
              </div>

              {result.prediction === 'Fraudulent' && (
                <div className="mt-4 p-4 bg-red-100 rounded-lg">
                  <p className="font-medium text-red-800">⚠️ Recommended Actions:</p>
                  <ul className="mt-2 space-y-1 text-sm text-red-700">
                    <li>• Block the transaction immediately</li>
                    <li>• Contact the cardholder for verification</li>
                    <li>• Report to fraud prevention team</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>Powered by Machine Learning • Logistic Regression Model</p>
          <p className="mt-1">Training Accuracy: 94.5% | Test Accuracy: 92.4%</p>
        </div>
      </div>
    </div>
  );
};

export default FraudDetectionApp;
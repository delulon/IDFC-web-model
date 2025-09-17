// Application data
const appData = {
  "accounts": [
    {
      "id": "acc1",
      "type": "Savings Account",
      "number": "123473678570",
      "balance": "₹ 1,24,567.89",
      "maskedBalance": "₹ *********",
      "nickname": "Primary Savings"
    },
    {
      "id": "acc2", 
      "type": "Current Account",
      "number": "123473678571",
      "balance": "₹ 89,234.56",
      "maskedBalance": "₹ *********",
      "nickname": "Business Current"
    },
    {
      "id": "acc3",
      "type": "Salary Account", 
      "number": "123473678572",
      "balance": "₹ 67,890.12",
      "maskedBalance": "₹ *********",
      "nickname": "Monthly Salary"
    },
    {
      "id": "acc4",
      "type": "Fixed Deposit",
      "number": "123473678573", 
      "balance": "₹ 5,00,000.00",
      "maskedBalance": "₹ *********",
      "nickname": "5 Year FD"
    }
  ],
  "creditCards": [
    {
      "id": "cc1",
      "cardName": "FIRST Millennia Credit Card",
      "cardNumber": "**** **** **** 1234",
      "creditLimit": "₹ 2,00,000",
      "availableCredit": "₹ 1,45,230",
      "dueAmount": "₹ 12,450",
      "dueDate": "25 Sep 2025",
      "lastStatement": "₹ 23,670",
      "cardUrl": "https://www.idfcfirstbank.com/credit-card/millennia",
      "recentTransactions": [
        {"date": "15 Sep", "merchant": "Amazon", "amount": "₹ 2,340"},
        {"date": "14 Sep", "merchant": "Swiggy", "amount": "₹ 567"},
        {"date": "13 Sep", "merchant": "Shell Petrol", "amount": "₹ 3,200"}
      ]
    },
    {
      "id": "cc2", 
      "cardName": "FIRST Wealth Credit Card",
      "cardNumber": "**** **** **** 5678",
      "creditLimit": "₹ 5,00,000",
      "availableCredit": "₹ 4,67,890",
      "dueAmount": "₹ 8,120",
      "dueDate": "28 Sep 2025", 
      "lastStatement": "₹ 15,230",
      "cardUrl": "https://www.idfcfirstbank.com/credit-card/wealth",
      "recentTransactions": [
        {"date": "16 Sep", "merchant": "BookMyShow", "amount": "₹ 1,200"},
        {"date": "15 Sep", "merchant": "Zara", "amount": "₹ 4,500"},
        {"date": "14 Sep", "merchant": "Uber", "amount": "₹ 450"}
      ]
    }
  ],
  "smartInsights": [
    {
      "id": "insight1",
      "title": "Pay Electricity Bill",
      "description": "Your electricity bill of ₹1,240 is due in 3 days",
      "priority": "high",
      "action": "Pay Now",
      "category": "bill_payment",
      "details": {
        "billAmount": "₹1,240",
        "dueDate": "20 Sep 2025",
        "provider": "Delhi Electricity Board"
      }
    },
    {
      "id": "insight2", 
      "title": "Save for Vacation",
      "description": "Based on your spending, you can save ₹5,000/month for your vacation goal",
      "priority": "medium",
      "action": "Set Goal",
      "secondaryAction": "Edit Goal",
      "category": "savings",
      "details": {
        "currentSavings": "₹15,000",
        "targetAmount": "₹75,000",
        "monthlyTarget": "₹5,000",
        "destination": "European Tour"
      }
    }
  ],
  "aiSuggestions": [
    {
      "id": "ai1",
      "title": "Pay Electricity Bill",
      "description": "Your electricity bill of ₹1,240 is due in 3 days",
      "priority": "high",
      "action": "Pay Now",
      "category": "bill_payment",
      "details": {
        "billAmount": "₹1,240",
        "dueDate": "20 Sep 2025",
        "provider": "Delhi Electricity Board",
        "consumerNumber": "1234567890"
      }
    },
    {
      "id": "ai2", 
      "title": "Save for Vacation",
      "description": "Based on your spending, you can save ₹5,000/month for your vacation goal",
      "priority": "medium",
      "action": "Set Goal",
      "secondaryAction": "Edit Goal",
      "category": "savings",
      "details": {
        "currentSavings": "₹15,000",
        "targetAmount": "₹75,000",
        "monthlyTarget": "₹5,000",
        "timelineMonths": 12,
        "destination": "European Tour"
      }
    },
    {
      "id": "ai3",
      "title": "Credit Score Check", 
      "description": "Your credit score improved by 15 points. Check your detailed report",
      "priority": "low",
      "action": "View Report",
      "category": "credit",
      "details": {
        "currentScore": 785,
        "previousScore": 770,
        "improvement": 15,
        "creditLimit": "₹7,00,000",
        "utilization": "18%"
      }
    },
    {
      "id": "ai4",
      "title": "Investment Opportunity",
      "description": "SIP in Equity funds can help you save tax and grow wealth",
      "priority": "medium", 
      "action": "Explore",
      "category": "investment",
      "details": {
        "recommendedAmount": "₹10,000",
        "expectedReturns": "12-15%",
        "taxSaving": "₹46,800",
        "fundName": "IDFC Tax Advantage Fund"
      }
    },
    {
      "id": "ai5",
      "title": "EMI Due Reminder",
      "description": "Your home loan EMI of ₹25,000 is due tomorrow",
      "priority": "high",
      "action": "Pay EMI",
      "category": "loan",
      "details": {
        "emiAmount": "₹25,000",
        "dueDate": "18 Sep 2025",
        "loanType": "Home Loan",
        "remainingTenure": "15 years 8 months"
      }
    }
  ],
  "widgets": [
    {"id": "payEMI", "label": "Pay EMI", "selected": true, "icon": "card"},
    {"id": "emiCalc", "label": "EMI Calculator", "selected": true, "icon": "calc"},
    {"id": "moneyMgr", "label": "Money Manager", "selected": true, "icon": "wallet"},
    {"id": "smartInsights", "label": "Smart Insights", "selected": true, "icon": "smartBulb"},
    {"id": "insights", "label": "Spending Insights", "selected": false, "icon": "chart"},
    {"id": "billPay", "label": "Bill Payments", "selected": false, "icon": "bill"},
    {"id": "recharge", "label": "Recharge", "selected": false, "icon": "phone"},
    {"id": "booking", "label": "Bookings", "selected": false, "icon": "calendar"},
    {"id": "insurance", "label": "Insurance", "selected": false, "icon": "shield"},
    {"id": "mutual", "label": "Mutual Funds", "selected": false, "icon": "chart2"},
    {"id": "gold", "label": "Digital Gold", "selected": false, "icon": "gold"}
  ],
  "paymentMethods": [
    {"id": "upi", "name": "UPI", "icon": "upi", "details": "Pay instantly via UPI"},
    {"id": "netbanking", "name": "Net Banking", "icon": "bank", "details": "IDFC FIRST Bank"},
    {"id": "debit", "name": "Debit Card", "icon": "card", "details": "****1234"}
  ]
};

// Application state
let currentView = 'home';
let homepageMode = 'default'; // 'default' or 'customized'
let selectedAccountId = 'acc1';
let balanceVisible = {};
let widgets = [...appData.widgets];
let selectedPaymentMethod = 'upi';

// Initialize balance visibility for all accounts
appData.accounts.forEach(account => {
  balanceVisible[account.id] = false;
});

// SVG Icons
const icons = {
  card: `<rect x="2" y="6" width="20" height="12" rx="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
         <circle cx="6" cy="14" r="1" fill="currentColor"/>
         <line x1="10" y1="14" x2="18" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  calc: `<rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <line x1="8" y1="6" x2="16" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
         <line x1="8" y1="10" x2="8" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
         <line x1="12" y1="10" x2="12" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
         <line x1="16" y1="10" x2="16" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  wallet: `<path d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           <circle cx="10" cy="8" r="0.5" fill="currentColor"/>
           <circle cx="14" cy="8" r="0.5" fill="currentColor"/>`,
  smartBulb: `<path d="M9 21h6M12 3C8.5 3 6 5.5 6 9c0 2.4 1.2 4.5 3 5.7V17h6v-2.3c1.8-1.2 3-3.3 3-5.7 0-3.5-2.5-6-6-6z" stroke="#68131a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="white"/>
              <circle cx="10" cy="8" r="0.8" fill="#68131a"/>
              <circle cx="14" cy="10" r="0.6" fill="#68131a"/>
              <circle cx="8" cy="11" r="0.5" fill="#68131a"/>
              <path d="M9 12l2-1 2 1.5" stroke="#68131a" stroke-width="1" stroke-linecap="round"/>
              <path d="M10 13h4M11 14h2" stroke="#68131a" stroke-width="0.8" stroke-linecap="round"/>`,
  ai: `<path d="M12 2l3.09 6.26L22 9l-5.91 3.74L18 20l-6-3.74L6 20l1.91-7.26L2 9l6.91-.74L12 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>`,
  chart: `<path d="M3 18L7 12L11 15L17 8L21 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  bill: `<rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <line x1="8" y1="6" x2="16" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
         <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
         <line x1="8" y1="14" x2="12" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  phone: `<rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  calendar: `<rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  chart2: `<path d="M3 3v18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M7 12l4-4 4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  gold: `<rect x="3" y="8" width="18" height="4" rx="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <rect x="5" y="12" width="14" height="4" rx="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <rect x="7" y="16" width="10" height="4" rx="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  upi: `<rect x="2" y="6" width="20" height="12" rx="3" stroke="currentColor" stroke-width="2"/>
        <path d="M8 14h8M8 10h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  bank: `<path d="M3 21h18M5 21V7l8-4v18M19 21V7l-6-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M9 9v.01M9 12v.01M9 15v.01M13 9v.01M13 12v.01M13 15v.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`
};

// DOM Elements
let homeView, customizeView, aiSuggestionsView, billPaymentView, goalSettingView, creditReportView, investmentView;
let backBtn, menuBtn, customizeBtn, saveButton, saveButtonContainer;
let accountCarousel, carouselDots, creditCardsContainer, smartInsightsContainer;
let customizeGrid, widgetsGrid, defaultContent, customizedContent, aiSuggestionsList;

// Global functions (for inline event handlers)
window.toggleBalance = function(accountId) {
  balanceVisible[accountId] = !balanceVisible[accountId];
  renderAccountCards();
};

window.payBill = function(cardId) {
  const card = appData.creditCards.find(c => c.id === cardId);
  alert(`Pay Bill functionality for ${card.cardName}\nDue Amount: ${card.dueAmount}`);
};

window.viewStatement = function(cardId) {
  const card = appData.creditCards.find(c => c.id === cardId);
  alert(`Statement for ${card.cardName}\nLast Statement: ${card.lastStatement}`);
};

window.handleSmartInsight = function(insightId, actionType) {
  const insight = appData.smartInsights.find(s => s.id === insightId);
  
  switch(insight.category) {
    case 'bill_payment':
      showView('bill-payment');
      renderBillPaymentView(insight);
      break;
    case 'savings':
      showView('goal-setting');
      renderGoalSettingView(insight, actionType);
      break;
  }
};

window.handleAISuggestion = function(suggestionId, actionType) {
  const suggestion = appData.aiSuggestions.find(s => s.id === suggestionId);
  
  switch(suggestion.category) {
    case 'bill_payment':
      showView('bill-payment');
      renderBillPaymentView(suggestion);
      break;
    case 'savings':
      showView('goal-setting');
      renderGoalSettingView(suggestion, actionType);
      break;
    case 'credit':
      showView('credit-report');
      renderCreditReportView(suggestion);
      break;
    case 'investment':
      showView('investment');
      renderInvestmentView(suggestion);
      break;
    case 'loan':
      alert(`Pay EMI functionality for ${suggestion.details.loanType}\nAmount: ${suggestion.details.emiAmount}`);
      break;
  }
};

// Utility Functions
function showView(viewName) {
  console.log('Switching to view:', viewName);
  
  // Hide all views
  const allViews = [homeView, customizeView, aiSuggestionsView, billPaymentView, goalSettingView, creditReportView, investmentView];
  allViews.forEach(view => {
    if (view) {
      view.classList.add('hidden');
    }
  });
  
  // Update header buttons
  if (viewName === 'home') {
    if (backBtn) backBtn.classList.add('hidden');
    if (menuBtn) menuBtn.classList.remove('hidden');
    if (saveButtonContainer) saveButtonContainer.classList.add('hidden');
  } else {
    if (backBtn) backBtn.classList.remove('hidden');
    if (menuBtn) menuBtn.classList.add('hidden');
    if (viewName === 'customize') {
      if (saveButtonContainer) saveButtonContainer.classList.remove('hidden');
    } else {
      if (saveButtonContainer) saveButtonContainer.classList.add('hidden');
    }
  }
  
  // Show target view
  const viewMap = {
    'home': homeView,
    'customize': customizeView,
    'ai-suggestions': aiSuggestionsView,
    'bill-payment': billPaymentView,
    'goal-setting': goalSettingView,
    'credit-report': creditReportView,
    'investment': investmentView
  };
  
  if (viewMap[viewName]) {
    viewMap[viewName].classList.remove('hidden');
  }
  
  currentView = viewName;
}

function createSVGIcon(iconName, color = '#68131a') {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.style.color = color;
  svg.innerHTML = icons[iconName] || '';
  return svg;
}

function isSmartInsightsEnabled() {
  const smartInsightsWidget = widgets.find(w => w.id === 'smartInsights');
  return smartInsightsWidget ? smartInsightsWidget.selected : false;
}

// Account Cards Functions
function renderAccountCards() {
  if (!accountCarousel || !carouselDots) return;
  
  accountCarousel.innerHTML = '';
  carouselDots.innerHTML = '';
  
  appData.accounts.forEach((account, index) => {
    // Create account card
    const card = document.createElement('div');
    card.className = `account-card ${account.id === selectedAccountId ? 'selected' : ''}`;
    card.dataset.accountId = account.id;
    
    const isVisible = balanceVisible[account.id];
    const displayBalance = isVisible ? account.balance : account.maskedBalance;
    
    card.innerHTML = `
      <div class="account-type">${account.type.toUpperCase()}</div>
      <div class="account-nickname">${account.nickname}</div>
      <div class="account-number">ACCOUNT: ${account.number}</div>
      <div class="balance-label">AVAILABLE BALANCE</div>
      <div class="balance-amount">
        ${displayBalance}
        <button class="balance-toggle" onclick="toggleBalance('${account.id}')">
          ${isVisible ? '👁️' : '👁️‍🗨️'}
        </button>
      </div>
      <button class="add-money-btn">Add Money</button>
    `;
    
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('balance-toggle') && !e.target.classList.contains('add-money-btn')) {
        selectAccount(account.id);
      }
    });
    
    accountCarousel.appendChild(card);
    
    // Create carousel dot
    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => scrollToAccount(index));
    carouselDots.appendChild(dot);
  });
}

function selectAccount(accountId) {
  selectedAccountId = accountId;
  document.querySelectorAll('.account-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.accountId === accountId);
  });
}

function scrollToAccount(index) {
  if (!accountCarousel) return;
  
  const cardWidth = 280 + 16; // card width + gap
  accountCarousel.scrollTo({
    left: index * cardWidth,
    behavior: 'smooth'
  });
  
  // Update dots
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Smart Insights Functions
function renderSmartInsights() {
  if (!smartInsightsContainer) return;
  
  // Clear existing content
  smartInsightsContainer.innerHTML = '';
  
  // Only show if Smart Insights is enabled
  if (!isSmartInsightsEnabled()) {
    smartInsightsContainer.style.display = 'none';
    return;
  }
  
  smartInsightsContainer.style.display = 'block';
  
  // Add section title
  const titleContainer = document.createElement('div');
  titleContainer.className = 'section-title';
  titleContainer.innerHTML = `
    <h3>Smart Insights</h3>
    <span class="ai-badge">AI</span>
  `;
  smartInsightsContainer.appendChild(titleContainer);
  
  // Add insights cards
  const insightsGrid = document.createElement('div');
  insightsGrid.className = 'smart-insights-grid';
  
  appData.smartInsights.forEach(insight => {
    const insightCard = document.createElement('div');
    insightCard.className = `smart-insight-card ${insight.priority}`;
    
    const actions = [];
    actions.push(`<button class="insight-action-btn primary" onclick="handleSmartInsight('${insight.id}', 'primary')">${insight.action}</button>`);
    if (insight.secondaryAction) {
      actions.push(`<button class="insight-action-btn secondary" onclick="handleSmartInsight('${insight.id}', 'secondary')">${insight.secondaryAction}</button>`);
    }
    
    insightCard.innerHTML = `
      <div class="insight-header">
        <div class="insight-title">${insight.title}</div>
        <div class="insight-priority priority-${insight.priority}">${insight.priority.toUpperCase()}</div>
      </div>
      <div class="insight-description">${insight.description}</div>
      <div class="insight-actions">
        ${actions.join('')}
      </div>
    `;
    
    insightsGrid.appendChild(insightCard);
  });
  
  smartInsightsContainer.appendChild(insightsGrid);
}

// Credit Cards Functions
function renderCreditCards() {
  if (!creditCardsContainer) return;
  
  creditCardsContainer.innerHTML = '';
  
  appData.creditCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'credit-card';
    
    cardElement.innerHTML = `
      <div class="card-header">
        <div class="card-name">
          <a href="${card.cardUrl}" target="_blank" class="card-name-link">${card.cardName}</a>
        </div>
        <div class="card-logo">IDFC</div>
      </div>
      <div class="card-number">${card.cardNumber}</div>
      <div class="card-details">
        <div class="card-detail">
          <div class="card-detail-label">Credit Limit</div>
          <div class="card-detail-value">${card.creditLimit}</div>
        </div>
        <div class="card-detail">
          <div class="card-detail-label">Available Credit</div>
          <div class="card-detail-value">${card.availableCredit}</div>
        </div>
        <div class="card-detail">
          <div class="card-detail-label">Due Amount</div>
          <div class="card-detail-value due-amount">${card.dueAmount}</div>
        </div>
        <div class="card-detail">
          <div class="card-detail-label">Due Date</div>
          <div class="card-detail-value">${card.dueDate}</div>
        </div>
      </div>
      <div class="card-actions">
        <button class="card-btn primary" onclick="payBill('${card.id}')">Pay Bill</button>
        <button class="card-btn secondary" onclick="viewStatement('${card.id}')">View Statement</button>
      </div>
      <div class="recent-transactions">
        <div class="transaction-header">Recent Transactions</div>
        ${card.recentTransactions.map(transaction => `
          <div class="transaction">
            <div class="transaction-info">
              <div class="transaction-merchant">${transaction.merchant}</div>
              <div class="transaction-date">${transaction.date}</div>
            </div>
            <div class="transaction-amount">${transaction.amount}</div>
          </div>
        `).join('')}
      </div>
    `;
    
    creditCardsContainer.appendChild(cardElement);
  });
}

// AI Suggestions Functions
function renderAISuggestionsList() {
  if (!aiSuggestionsList) return;
  
  aiSuggestionsList.innerHTML = '';
  
  appData.aiSuggestions.forEach(suggestion => {
    const suggestionElement = document.createElement('div');
    suggestionElement.className = `ai-suggestion ${suggestion.priority}`;
    suggestionElement.dataset.suggestionId = suggestion.id;
    
    const actions = [];
    actions.push(`<button class="suggestion-action" onclick="handleAISuggestion('${suggestion.id}', 'primary')">${suggestion.action}</button>`);
    if (suggestion.secondaryAction) {
      actions.push(`<button class="suggestion-action secondary" onclick="handleAISuggestion('${suggestion.id}', 'secondary')">${suggestion.secondaryAction}</button>`);
    }
    
    suggestionElement.innerHTML = `
      <div class="suggestion-header">
        <div class="suggestion-title">${suggestion.title}</div>
        <div class="suggestion-priority priority-${suggestion.priority}">${suggestion.priority.toUpperCase()}</div>
      </div>
      <div class="suggestion-description">${suggestion.description}</div>
      <div class="suggestion-actions">
        ${actions.join('')}
      </div>
    `;
    
    aiSuggestionsList.appendChild(suggestionElement);
  });
}

// Bill Payment View Functions
function renderBillPaymentView(suggestion) {
  const paymentOptions = document.getElementById('paymentOptions');
  if (paymentOptions) {
    paymentOptions.innerHTML = '';
    
    appData.paymentMethods.forEach(method => {
      const option = document.createElement('div');
      option.className = `payment-option ${method.id === selectedPaymentMethod ? 'selected' : ''}`;
      option.dataset.methodId = method.id;
      
      const iconSvg = createSVGIcon(method.icon, '#68131a');
      iconSvg.classList.add('payment-icon');
      
      option.appendChild(iconSvg);
      
      const details = document.createElement('div');
      details.className = 'payment-details';
      details.innerHTML = `
        <div class="payment-name">${method.name}</div>
        <div class="payment-description">${method.details}</div>
      `;
      option.appendChild(details);
      
      option.addEventListener('click', () => {
        selectedPaymentMethod = method.id;
        document.querySelectorAll('.payment-option').forEach(opt => {
          opt.classList.toggle('selected', opt.dataset.methodId === method.id);
        });
      });
      
      paymentOptions.appendChild(option);
    });
  }
  
  // Add event listener for pay button
  const payNowBtn = document.getElementById('payNowBtn');
  if (payNowBtn) {
    payNowBtn.onclick = function() {
      const selectedMethod = appData.paymentMethods.find(m => m.id === selectedPaymentMethod);
      alert(`Payment of ₹1,240 initiated via ${selectedMethod.name}\nTransaction processing...`);
      showView('home');
    };
  }
}

// Goal Setting View Functions  
function renderGoalSettingView(suggestion, actionType) {
  const destinationInput = document.getElementById('destinationInput');
  const targetAmountInput = document.getElementById('targetAmountInput');
  const timelineSelect = document.getElementById('timelineSelect');
  const monthlySavings = document.getElementById('monthlySavings');
  const createGoalBtn = document.getElementById('createGoalBtn');
  const editGoalBtn = document.getElementById('editGoalBtn');
  
  if (actionType === 'secondary') {
    // Edit mode - populate with existing data
    if (destinationInput) destinationInput.value = suggestion.details.destination;
    if (targetAmountInput) targetAmountInput.value = suggestion.details.targetAmount;
    if (timelineSelect) timelineSelect.value = suggestion.details.timelineMonths;
    updateMonthlySavings();
    
    if (createGoalBtn) createGoalBtn.style.display = 'none';
    if (editGoalBtn) editGoalBtn.style.display = 'block';
  } else {
    // Create mode
    if (createGoalBtn) createGoalBtn.style.display = 'block';
    if (editGoalBtn) editGoalBtn.style.display = 'none';
  }
  
  // Add event listeners
  if (targetAmountInput && timelineSelect) {
    [targetAmountInput, timelineSelect].forEach(element => {
      element.addEventListener('change', updateMonthlySavings);
    });
  }
  
  if (createGoalBtn) {
    createGoalBtn.onclick = function() {
      alert('Vacation savings goal created successfully!\nMonthly target: ₹6,250');
      showView('home');
    };
  }
  
  if (editGoalBtn) {
    editGoalBtn.onclick = function() {
      alert('Vacation savings goal updated successfully!');
      showView('home');
    };
  }
}

function updateMonthlySavings() {
  const targetAmountInput = document.getElementById('targetAmountInput');
  const timelineSelect = document.getElementById('timelineSelect');
  const monthlySavings = document.getElementById('monthlySavings');
  
  if (targetAmountInput && timelineSelect && monthlySavings) {
    const amount = parseFloat(targetAmountInput.value.replace('₹', '').replace(',', '')) || 75000;
    const months = parseInt(timelineSelect.value) || 12;
    const monthly = Math.ceil(amount / months);
    monthlySavings.textContent = `₹${monthly.toLocaleString()}`;
  }
}

// Credit Report View Functions
function renderCreditReportView(suggestion) {
  const downloadReportBtn = document.getElementById('downloadReportBtn');
  const creditTipsBtn = document.getElementById('creditTipsBtn');
  
  if (downloadReportBtn) {
    downloadReportBtn.onclick = function() {
      alert('Credit report downloaded successfully!');
      showView('home');
    };
  }
  
  if (creditTipsBtn) {
    creditTipsBtn.onclick = function() {
      alert('Credit Improvement Tips:\n• Pay bills on time\n• Keep credit utilization below 30%\n• Maintain old credit accounts\n• Monitor credit report regularly');
    };
  }
}

// Investment View Functions
function renderInvestmentView(suggestion) {
  const startSIPBtn = document.getElementById('startSIPBtn');
  const exploreFundsBtn = document.getElementById('exploreFundsBtn');
  const sipAmountInput = document.getElementById('sipAmountInput');
  
  if (sipAmountInput) {
    sipAmountInput.addEventListener('input', function() {
      // Update projections based on SIP amount
      const amount = parseFloat(this.value.replace('₹', '').replace(',', '')) || 10000;
      const tenYearValue = Math.round(amount * 12 * 10 * 1.93); // Rough calculation for 14% returns
      const projectionElement = document.querySelector('.projection-item:last-child span:last-child');
      if (projectionElement) {
        projectionElement.textContent = `₹${(tenYearValue / 100000).toFixed(0)}.${((tenYearValue % 100000) / 1000).toFixed(0)} Lakh`;
      }
    });
  }
  
  if (startSIPBtn) {
    startSIPBtn.onclick = function() {
      const amount = sipAmountInput ? sipAmountInput.value : '₹10,000';
      alert(`SIP investment of ${amount} started in IDFC Tax Advantage Fund!\nFirst installment will be debited on 1st of next month.`);
      showView('home');
    };
  }
  
  if (exploreFundsBtn) {
    exploreFundsBtn.onclick = function() {
      alert('Exploring more mutual fund options...\n• IDFC Large Cap Fund\n• IDFC Flexi Cap Fund\n• IDFC Bond Fund');
    };
  }
}

// Customize Functions
function renderCustomizeOptions() {
  console.log('Rendering customize options');
  if (!customizeGrid) {
    console.error('customizeGrid not found');
    return;
  }
  
  customizeGrid.innerHTML = '';
  
  // Render widget options
  widgets.forEach(widget => {
    const option = document.createElement('div');
    option.className = `customize-option ${widget.selected ? 'selected' : ''}`;
    option.dataset.widgetId = widget.id;
    
    const iconSvg = createSVGIcon(widget.icon, '#68131a');
    iconSvg.classList.add('customize-icon');
    
    option.appendChild(iconSvg);
    
    const label = document.createElement('div');
    label.className = 'customize-label';
    label.textContent = widget.label;
    option.appendChild(label);
    
    const toggle = document.createElement('button');
    toggle.className = `customize-toggle ${widget.selected ? 'selected' : ''}`;
    toggle.textContent = widget.selected ? '✓' : '+';
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWidget(widget.id);
    });
    option.appendChild(toggle);
    
    option.addEventListener('click', () => toggleWidget(widget.id));
    customizeGrid.appendChild(option);
  });
}

function toggleWidget(widgetId) {
  widgets = widgets.map(widget => 
    widget.id === widgetId 
      ? { ...widget, selected: !widget.selected }
      : widget
  );
  renderCustomizeOptions();
}

function renderWidgets() {
  if (!widgetsGrid) return;
  
  widgetsGrid.innerHTML = '';
  
  widgets.filter(widget => widget.selected && widget.id !== 'smartInsights').forEach(widget => {
    const widgetElement = document.createElement('div');
    widgetElement.className = 'widget';
    
    const iconSvg = createSVGIcon(widget.icon, '#68131a');
    iconSvg.classList.add('widget-icon');
    
    widgetElement.appendChild(iconSvg);
    
    const label = document.createElement('div');
    label.className = 'widget-label';
    label.textContent = widget.label;
    widgetElement.appendChild(label);
    
    widgetElement.addEventListener('click', () => {
      alert(`Opening ${widget.label}...`);
    });
    
    widgetsGrid.appendChild(widgetElement);
  });
}

function updateHomepageContent() {
  if (!defaultContent || !customizedContent) return;
  
  if (homepageMode === 'default') {
    defaultContent.classList.remove('hidden');
    customizedContent.classList.add('hidden');
  } else {
    defaultContent.classList.add('hidden');
    customizedContent.classList.remove('hidden');
    renderWidgets();
  }
  
  // Always render smart insights if enabled, regardless of homepage mode
  renderSmartInsights();
}

// Initialize DOM Elements
function initializeElements() {
  console.log('Initializing DOM elements');
  
  homeView = document.getElementById('homeView');
  customizeView = document.getElementById('customizeView');
  aiSuggestionsView = document.getElementById('aiSuggestionsView');
  billPaymentView = document.getElementById('billPaymentView');
  goalSettingView = document.getElementById('goalSettingView');
  creditReportView = document.getElementById('creditReportView');
  investmentView = document.getElementById('investmentView');
  
  backBtn = document.getElementById('backBtn');
  menuBtn = document.getElementById('menuBtn');
  customizeBtn = document.getElementById('customizeBtn');
  saveButton = document.getElementById('saveButton');
  saveButtonContainer = document.getElementById('saveButtonContainer');
  
  accountCarousel = document.getElementById('accountCarousel');
  carouselDots = document.getElementById('carouselDots');
  creditCardsContainer = document.getElementById('creditCardsContainer');
  smartInsightsContainer = document.getElementById('smartInsightsContainer');
  aiSuggestionsList = document.getElementById('aiSuggestionsList');
  
  customizeGrid = document.getElementById('customizeGrid');
  widgetsGrid = document.getElementById('widgetsGrid');
  defaultContent = document.getElementById('defaultContent');
  customizedContent = document.getElementById('customizedContent');
  
  // Log which elements were found
  console.log('Found elements:', {
    homeView: !!homeView,
    customizeView: !!customizeView,
    customizeBtn: !!customizeBtn,
    customizeGrid: !!customizeGrid,
    saveButton: !!saveButton,
    smartInsightsContainer: !!smartInsightsContainer
  });
}

// Initialize event listeners
function initializeEventListeners() {
  console.log('Initializing event listeners');
  
  // Customize button
  if (customizeBtn) {
    console.log('Adding customize button listener');
    customizeBtn.addEventListener('click', (e) => {
      console.log('Customize button clicked!');
      e.preventDefault();
      showView('customize');
      renderCustomizeOptions();
    });
  } else {
    console.error('customizeBtn not found!');
  }

  // Back button
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      console.log('Back button clicked');
      e.preventDefault();
      showView('home');
    });
  }

  // Save button
  if (saveButton) {
    saveButton.addEventListener('click', (e) => {
      console.log('Save button clicked');
      e.preventDefault();
      homepageMode = 'customized';
      updateHomepageContent();
      showView('home');
    });
  }

  // Handle carousel scroll
  if (accountCarousel) {
    accountCarousel.addEventListener('scroll', () => {
      const scrollLeft = accountCarousel.scrollLeft;
      const cardWidth = 280 + 16; // card width + gap
      const activeIndex = Math.round(scrollLeft / cardWidth);
      
      document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    });
  }
}

// Initialize the app
function initializeApp() {
  console.log('Starting app initialization');
  initializeElements();
  initializeEventListeners();
  renderAccountCards();
  renderCreditCards();
  renderSmartInsights(); // Make sure to render Smart Insights on startup
  updateHomepageContent();
  showView('home');
  console.log('App initialization complete');
}

// Start the application
document.addEventListener('DOMContentLoaded', initializeApp);
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
      "cardName": "IDFC SELECT Credit Card",
      "cardNumber": "**** **** **** 1234",
      "creditLimit": "₹ 2,00,000",
      "availableCredit": "₹ 1,45,230",
      "dueAmount": "₹ 12,450",
      "dueDate": "25 Sep 2025",
      "lastStatement": "₹ 23,670",
      "recentTransactions": [
        {"date": "15 Sep", "merchant": "Amazon", "amount": "₹ 2,340"},
        {"date": "14 Sep", "merchant": "Swiggy", "amount": "₹ 567"},
        {"date": "13 Sep", "merchant": "Shell Petrol", "amount": "₹ 3,200"}
      ]
    },
    {
      "id": "cc2", 
      "cardName": "IDFC WEALTH Credit Card",
      "cardNumber": "**** **** **** 5678",
      "creditLimit": "₹ 5,00,000",
      "availableCredit": "₹ 4,67,890",
      "dueAmount": "₹ 8,120",
      "dueDate": "28 Sep 2025", 
      "lastStatement": "₹ 15,230",
      "recentTransactions": [
        {"date": "16 Sep", "merchant": "BookMyShow", "amount": "₹ 1,200"},
        {"date": "15 Sep", "merchant": "Zara", "amount": "₹ 4,500"},
        {"date": "14 Sep", "merchant": "Uber", "amount": "₹ 450"}
      ]
    }
  ],
  "aiSuggestions": [
    {
      "id": "ai1",
      "title": "Pay Electricity Bill",
      "description": "Your electricity bill of ₹1,240 is due in 3 days",
      "priority": "high",
      "action": "Pay Now",
      "category": "bill_payment"
    },
    {
      "id": "ai2", 
      "title": "Save for Vacation",
      "description": "Based on your spending, you can save ₹5,000/month for your vacation goal",
      "priority": "medium",
      "action": "Set Goal",
      "category": "savings"
    },
    {
      "id": "ai3",
      "title": "Credit Score Check", 
      "description": "Your credit score improved by 15 points. Check your detailed report",
      "priority": "low",
      "action": "View Report",
      "category": "credit"
    },
    {
      "id": "ai4",
      "title": "Investment Opportunity",
      "description": "SIP in Equity funds can help you save tax and grow wealth",
      "priority": "medium", 
      "action": "Explore",
      "category": "investment"
    }
  ],
  "widgets": [
    {"id": "payEMI", "label": "Pay EMI", "selected": true, "icon": "card"},
    {"id": "emiCalc", "label": "EMI Calculator", "selected": true, "icon": "calc"},
    {"id": "moneyMgr", "label": "Money Manager", "selected": true, "icon": "wallet"},
    {"id": "insights", "label": "Spending Insights", "selected": false, "icon": "chart"},
    {"id": "billPay", "label": "Bill Payments", "selected": false, "icon": "bill"},
    {"id": "recharge", "label": "Recharge", "selected": false, "icon": "phone"},
    {"id": "booking", "label": "Bookings", "selected": false, "icon": "calendar"},
    {"id": "insurance", "label": "Insurance", "selected": false, "icon": "shield"},
    {"id": "mutual", "label": "Mutual Funds", "selected": false, "icon": "chart2"},
    {"id": "gold", "label": "Digital Gold", "selected": false, "icon": "gold"}
  ]
};

// Application state
let currentView = 'home';
let homepageMode = 'default'; // 'default' or 'customized'
let selectedAccountId = 'acc1';
let balanceVisible = {};
let widgets = [...appData.widgets];
let currentAISuggestion = null;

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
         <rect x="7" y="16" width="10" height="4" rx="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
};

// Initialize balance visibility for all accounts
appData.accounts.forEach(account => {
  balanceVisible[account.id] = false;
});

// DOM Elements
const homeView = document.getElementById('homeView');
const customizeView = document.getElementById('customizeView');
const aiDetailView = document.getElementById('aiDetailView');
const backBtn = document.getElementById('backBtn');
const menuBtn = document.getElementById('menuBtn');
const customizeBtn = document.getElementById('customizeBtn');
const saveButton = document.getElementById('saveButton');
const saveButtonContainer = document.getElementById('saveButtonContainer');
const accountCarousel = document.getElementById('accountCarousel');
const carouselDots = document.getElementById('carouselDots');
const creditCardsContainer = document.getElementById('creditCardsContainer');
const aiSuggestionsContainer = document.getElementById('aiSuggestionsContainer');
const customizeGrid = document.getElementById('customizeGrid');
const widgetsGrid = document.getElementById('widgetsGrid');
const defaultContent = document.getElementById('defaultContent');
const customizedContent = document.getElementById('customizedContent');
const aiDetailContent = document.getElementById('aiDetailContent');

// Utility Functions
function showView(viewName) {
  // Hide all views
  homeView.classList.add('hidden');
  customizeView.classList.add('hidden');
  aiDetailView.classList.add('hidden');
  
  // Update header buttons
  if (viewName === 'home') {
    backBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
    saveButtonContainer.classList.add('hidden');
  } else {
    backBtn.classList.remove('hidden');
    menuBtn.classList.add('hidden');
    if (viewName === 'customize') {
      saveButtonContainer.classList.remove('hidden');
    } else {
      saveButtonContainer.classList.add('hidden');
    }
  }
  
  // Show target view
  if (viewName === 'home') {
    homeView.classList.remove('hidden');
  } else if (viewName === 'customize') {
    customizeView.classList.remove('hidden');
  } else if (viewName === 'ai-detail') {
    aiDetailView.classList.remove('hidden');
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

// Account Cards Functions
function renderAccountCards() {
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

function toggleBalance(accountId) {
  balanceVisible[accountId] = !balanceVisible[accountId];
  renderAccountCards();
}

function scrollToAccount(index) {
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

// Credit Cards Functions
function renderCreditCards() {
  creditCardsContainer.innerHTML = '';
  
  appData.creditCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'credit-card';
    
    cardElement.innerHTML = `
      <div class="card-header">
        <div class="card-name">${card.cardName}</div>
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

function payBill(cardId) {
  const card = appData.creditCards.find(c => c.id === cardId);
  alert(`Pay Bill functionality for ${card.cardName}\nDue Amount: ${card.dueAmount}`);
}

function viewStatement(cardId) {
  const card = appData.creditCards.find(c => c.id === cardId);
  alert(`Statement for ${card.cardName}\nLast Statement: ${card.lastStatement}`);
}

// AI Suggestions Functions
function renderAISuggestions() {
  aiSuggestionsContainer.innerHTML = '';
  
  appData.aiSuggestions.forEach(suggestion => {
    const suggestionElement = document.createElement('div');
    suggestionElement.className = `ai-suggestion ${suggestion.priority}`;
    suggestionElement.dataset.suggestionId = suggestion.id;
    
    suggestionElement.innerHTML = `
      <div class="suggestion-header">
        <div class="suggestion-title">${suggestion.title}</div>
        <div class="suggestion-priority priority-${suggestion.priority}">${suggestion.priority.toUpperCase()}</div>
      </div>
      <div class="suggestion-description">${suggestion.description}</div>
      <button class="suggestion-action" onclick="handleAISuggestion('${suggestion.id}')">${suggestion.action}</button>
    `;
    
    suggestionElement.addEventListener('click', (e) => {
      if (!e.target.classList.contains('suggestion-action')) {
        showAISuggestionDetail(suggestion.id);
      }
    });
    
    aiSuggestionsContainer.appendChild(suggestionElement);
  });
}

function handleAISuggestion(suggestionId) {
  const suggestion = appData.aiSuggestions.find(s => s.id === suggestionId);
  
  switch(suggestion.category) {
    case 'bill_payment':
      alert(`Redirecting to bill payment for electricity bill of ₹1,240`);
      break;
    case 'savings':
      alert(`Setting up savings goal of ₹5,000/month for vacation`);
      break;
    case 'credit':
      alert(`Opening credit score report...`);
      break;
    case 'investment':
      alert(`Exploring SIP investment options...`);
      break;
  }
}

function showAISuggestionDetail(suggestionId) {
  const suggestion = appData.aiSuggestions.find(s => s.id === suggestionId);
  currentAISuggestion = suggestion;
  
  const detailContent = getAISuggestionDetailContent(suggestion);
  aiDetailContent.innerHTML = detailContent;
  
  showView('ai-detail');
}

function getAISuggestionDetailContent(suggestion) {
  const detailsMap = {
    'ai1': {
      title: 'Electricity Bill Payment',
      description: 'Your KSEB electricity bill is due in 3 days. Pay now to avoid late fees and ensure uninterrupted service.',
      actions: [
        { label: 'Pay ₹1,240 Now', action: 'pay', primary: true },
        { label: 'Set Reminder', action: 'remind', primary: false },
        { label: 'View Bill Details', action: 'details', primary: false }
      ]
    },
    'ai2': {
      title: 'Vacation Savings Goal',
      description: 'Based on your spending pattern, you can comfortably save ₹5,000 per month for your vacation. This will help you save ₹60,000 in a year for your dream trip.',
      actions: [
        { label: 'Set Savings Goal', action: 'save', primary: true },
        { label: 'View Spending Analysis', action: 'analysis', primary: false },
        { label: 'Maybe Later', action: 'later', primary: false }
      ]
    },
    'ai3': {
      title: 'Credit Score Improvement',
      description: 'Great news! Your credit score has improved by 15 points this month. Check your detailed credit report to see what factors contributed to this improvement.',
      actions: [
        { label: 'View Full Report', action: 'report', primary: true },
        { label: 'Credit Score Tips', action: 'tips', primary: false },
        { label: 'Monitor Score', action: 'monitor', primary: false }
      ]
    },
    'ai4': {
      title: 'Tax-Saving Investment',
      description: 'Invest in ELSS mutual funds through SIP to save tax under Section 80C while building wealth for the long term. Based on your income, you can save up to ₹46,800 in taxes.',
      actions: [
        { label: 'Start SIP Investment', action: 'invest', primary: true },
        { label: 'Learn About ELSS', action: 'learn', primary: false },
        { label: 'Tax Calculator', action: 'calculator', primary: false }
      ]
    }
  };
  
  const details = detailsMap[suggestion.id] || {
    title: suggestion.title,
    description: suggestion.description,
    actions: [{ label: suggestion.action, action: 'default', primary: true }]
  };
  
  return `
    <div class="ai-detail-header">
      <div class="ai-detail-title">${details.title}</div>
      <div class="ai-detail-description">${details.description}</div>
    </div>
    <div class="ai-detail-actions">
      ${details.actions.map(action => `
        <button class="ai-action-btn ${action.primary ? 'primary' : 'secondary'}" 
                onclick="handleAIDetailAction('${action.action}', '${suggestion.id}')">
          ${action.label}
        </button>
      `).join('')}
    </div>
  `;
}

function handleAIDetailAction(action, suggestionId) {
  const actionMessages = {
    'pay': 'Redirecting to bill payment...',
    'remind': 'Reminder set for 2 days before due date',
    'details': 'Opening bill details...',
    'save': 'Savings goal created successfully!',
    'analysis': 'Opening spending analysis...',
    'later': 'We\'ll remind you later',
    'report': 'Opening detailed credit report...',
    'tips': 'Here are some tips to improve your credit score...',
    'monitor': 'Credit score monitoring enabled',
    'invest': 'Redirecting to SIP investment options...',
    'learn': 'Opening ELSS education content...',
    'calculator': 'Opening tax calculator...',
    'default': 'Action completed!'
  };
  
  alert(actionMessages[action] || 'Action completed!');
  showView('home');
}

// Customize Functions
function renderCustomizeOptions() {
  customizeGrid.innerHTML = '';
  
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
  widgetsGrid.innerHTML = '';
  
  widgets.filter(widget => widget.selected).forEach(widget => {
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
  if (homepageMode === 'default') {
    defaultContent.classList.remove('hidden');
    customizedContent.classList.add('hidden');
  } else {
    defaultContent.classList.add('hidden');
    customizedContent.classList.remove('hidden');
    renderWidgets();
  }
}

// Event Listeners
customizeBtn.addEventListener('click', () => {
  showView('customize');
  renderCustomizeOptions();
});

backBtn.addEventListener('click', () => {
  showView('home');
});

saveButton.addEventListener('click', () => {
  homepageMode = 'customized';
  updateHomepageContent();
  showView('home');
});

// Handle carousel scroll
accountCarousel.addEventListener('scroll', () => {
  const scrollLeft = accountCarousel.scrollLeft;
  const cardWidth = 280 + 16; // card width + gap
  const activeIndex = Math.round(scrollLeft / cardWidth);
  
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === activeIndex);
  });
});

// Initialize the app
function initializeApp() {
  renderAccountCards();
  renderCreditCards();
  renderAISuggestions();
  updateHomepageContent();
  showView('home');
}

// Start the application
document.addEventListener('DOMContentLoaded', initializeApp);
/**
 * ============================================
 *  Free Online Calculators — Visitor Tracker
 *  Tracks page views to Supabase (primary)
 *  with localStorage fallback for demo/offline
 * ============================================
 */
(function () {
  'use strict';

  // ==================== CONFIGURATION ====================
  // Replace these with your Supabase project credentials after setup.
  // Instructions: https://supabase.com → New Project → Settings → API
  var SUPABASE_URL = 'https://yttmofeanlciglsgqepe.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0dG1vZmVhbmxjaWdsc2dxZXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0NzczNjYsImV4cCI6MjA5OTA1MzM2Nn0.dMpn4m90F_8RGSwNulYlfNWlD4KcPvDaiu1qpaPltEY';
  var TABLE_NAME = 'pageviews';    // Supabase table name
  var USE_SUPABASE = true;        // Set to true after creating the Supabase table

  // ==================== COLLECT VISIT DATA ====================
  // Normalize path: strip local filesystem prefix so both local and
  // deployed environments produce clean paths like /finance/loan-calculator.html
  function getCleanPath() {
    var path = location.pathname || '/';
    var idx = path.indexOf('/calculator-site/');
    if (idx !== -1) {
      return path.substring(idx + '/calculator-site'.length) || '/';
    }
    // Fallback: extract last 2 meaningful segments
    var parts = path.replace(/\/$/, '').split('/');
    var clean = parts.filter(function(s) { return s && !s.match(/^[A-Z]:$/); });
    return '/' + clean.slice(-2).join('/');
  }

  var pageData = {
    page:       getCleanPath(),
    referrer:   document.referrer || 'direct',
    screen_w:   screen.width,
    screen_h:   screen.height,
    lang:       navigator.language || 'unknown',
    timestamp:  new Date().toISOString()
  };

  // ==================== LOCAL STORAGE FALLBACK ====================
  // Always saves locally so the dashboard has demo data.
  function saveLocal() {
    try {
      var key = 'calc_site_pageviews';
      var data = JSON.parse(localStorage.getItem(key) || '[]');

      // Keep last 5000 entries to avoid storage bloat
      if (data.length > 5000) data = data.slice(-4000);

      data.push(pageData);
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) { /* localStorage full or disabled — ignore */ }
  }
  saveLocal();

  // ==================== SUPABASE (PRIMARY BACKEND) ====================
  function sendToSupabase() {
    if (!USE_SUPABASE) return;
    if (!SUPABASE_URL || SUPABASE_URL.indexOf('YOUR_PROJECT_ID') !== -1) return;

    // Use plain fetch — no SDK dependency needed for a simple insert.
    fetch(SUPABASE_URL + '/rest/v1/' + TABLE_NAME, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(pageData)
    }).catch(function () { /* silently ignore network errors */ });
  }
  sendToSupabase();

  // ==================== GOOGLE ANALYTICS 4 ====================
  // Replace with your GA4 Measurement ID after setting up GA4.
  // Go to https://analytics.google.com → Admin → Data Streams → Web
  var GA4_ID = '';  // e.g. 'G-XXXXXXXXXX'

  if (GA4_ID) {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA4_ID, {
      page_path: pageData.page,
      page_referrer: pageData.referrer
    });
  }

})();




<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>experiments/listview-accordion/jquery.mobile.listview.accordion.js at master from borismus/jquery-mobile - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="21bf38cfefee206169c222a4265c3dd7a72ebd8f" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundle_github.css?b915f9c17da0f47c02bf3e31d9644e942673b9b8" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundle_jquery.js?9d53e99b246b1c0c67e8a66f3c7a90c02ccff13d" type="text/javascript"></script>

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundle_github.js?532918ff1b26ecdc00649523cab30bd517b11ae0" type="text/javascript"></script>

    

      <link rel='permalink' href='/borismus/jquery-mobile/blob/06459f21f6df2e6a39acd83a971019dd35e317a2/experiments/listview-accordion/jquery.mobile.listview.accordion.js'>
    <META NAME="ROBOTS" CONTENT="NOINDEX, FOLLOW">

    <meta name="description" content="jquery-mobile - jQuery Mobile Framework" />
  <link href="https://github.com/borismus/jquery-mobile/commits/master.atom" rel="alternate" title="Recent Commits to jquery-mobile:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob windows env-production ">
    


    

    <div id="main">
      <div id="header" class="true">
          <a class="logo" href="https://github.com">
            <img alt="github" class="default svg" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6.svg" />
            <img alt="github" class="default png" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6.png" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover svg" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6-hover.svg" />
            <img alt="github" class="hover png" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6-hover.png" />
            <!--<![endif]-->
          </a>

        <div class="topsearch">
    <!--
      make sure to use fully qualified URLs here since this nav
      is used on error pages on other domains
    -->
    <ul class="nav logged_out">
        <li class="pricing"><a href="https://github.com/plans">Signup and Pricing</a></li>
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
      <li class="features"><a href="https://github.com/features">Features</a></li>
        <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      <li class="login"><a href="https://github.com/login?return_to=%2Fborismus%2Fjquery-mobile%2Fblob%2Fmaster%2Fexperiments%2Flistview-accordion%2Fjquery.mobile.listview.accordion.js">Login</a></li>
    </ul>
</div>

      </div>

      
            <div class="site">
      <div class="pagehead repohead vis-public fork  instapaper_ignore readability-menu">


      <div class="title-actions-bar">
        <h1>
          <a href="/borismus">borismus</a> /
          <strong><a href="/borismus/jquery-mobile" class="js-current-repository">jquery-mobile</a></strong>
            <span class="fork-flag">
              <span class="text">forked from <a href="/jquery/jquery-mobile">jquery/jquery-mobile</a></span>
            </span>
        </h1>
        



            <ul class="pagehead-actions">

        <li>
            <a href="/borismus/jquery-mobile/toggle_watch" class="minibutton btn-watch watch-button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '21bf38cfefee206169c222a4265c3dd7a72ebd8f'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Watch</span></a>
        </li>
            <li><a href="/borismus/jquery-mobile/fork" class="minibutton btn-fork fork-button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '21bf38cfefee206169c222a4265c3dd7a72ebd8f'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>

          
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers ">
            <a href="/borismus/jquery-mobile/watchers" title="Watchers" class="tooltipped downwards">
              8
            </a>
          </li>
          <li class="forks">
            <a href="/borismus/jquery-mobile/network" title="Forks" class="tooltipped downwards">
              696
            </a>
          </li>
        </ul>
      </li>
    </ul>

      </div>

        

  <ul class="tabs">
    <li><a href="/borismus/jquery-mobile" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/borismus/jquery-mobile/network" highlight="repo_networkrepo_fork_queue">Network</a>
    <li><a href="/borismus/jquery-mobile/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>1</span></a></li>



    <li><a href="/borismus/jquery-mobile/graphs" highlight="repo_graphsrepo_contributors">Stats &amp; Graphs</a></li>

  </ul>

  

<div class="subnav-bar">

  <ul class="actions">
    
      <li class="switcher">

        <div class="context-menu-container js-menu-container">
          <span class="text">Current branch:</span>
          <a href="#"
             class="minibutton bigger switcher context-menu-button js-menu-target js-commitish-button btn-branch repo-tree"
             data-master-branch="master"
             data-ref="master">
            <span><span class="icon"></span>master</span>
          </a>

          <div class="context-pane commitish-context js-menu-content">
            <a href="javascript:;" class="close js-menu-close"></a>
            <div class="title">Switch Branches/Tags</div>
            <div class="body pane-selector commitish-selector js-filterable-commitishes">
              <div class="filterbar">
                <div class="placeholder-field js-placeholder-field">
                  <label class="placeholder" for="context-commitish-filter-field" data-placeholder-mode="sticky">Filter branches/tags</label>
                  <input type="text" id="context-commitish-filter-field" class="commitish-filter" />
                </div>

                <ul class="tabs">
                  <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                  <li><a href="#" data-filter="tags">Tags</a></li>
                </ul>
              </div>

                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/borismus/jquery-mobile/blob/master/experiments/listview-accordion/jquery.mobile.listview.accordion.js" data-name="master">master</a>
                  </h4>
                </div>

                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/borismus/jquery-mobile/blob/1.0a2/experiments/listview-accordion/jquery.mobile.listview.accordion.js" data-name="1.0a2">1.0a2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/borismus/jquery-mobile/blob/1.0a1/experiments/listview-accordion/jquery.mobile.listview.accordion.js" data-name="1.0a1">1.0a1</a>
                  </h4>
                </div>

              <div class="no-results" style="display:none">Nothing to show</div>
            </div>
          </div><!-- /.commitish-context-context -->
        </div>

      </li>
  </ul>

  <ul class="subnav">
    <li><a href="/borismus/jquery-mobile" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/borismus/jquery-mobile/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/borismus/jquery-mobile/branches" class="" highlight="repo_branches">Branches <span class="counter">1</span></a></li>
    <li><a href="/borismus/jquery-mobile/tags" class="" highlight="repo_tags">Tags <span class="counter">2</span></a></li>
    <li><a href="/borismus/jquery-mobile/downloads" class="blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
  </ul>

</div>
  
  
  


        

      </div><!-- /.pagehead -->

      




  <div class="commit commit-tease js-details-container">
    <a href="/borismus/jquery-mobile/commit/06459f21f6df2e6a39acd83a971019dd35e317a2" anchor="comments" class="comment-count">1 comment</a>
  <p class="commit-title ">
      <a href="/borismus/jquery-mobile/blob/master/experiments/listview-accordion/jquery.mobile.listview.accordion.js"><a href="/borismus/jquery-mobile/commit/06459f21f6df2e6a39acd83a971019dd35e317a2" class="message">added a couple of plugins</a></a>
      
  </p>
  <div class="commit-meta">
    <a href="/borismus/jquery-mobile/commit/06459f21f6df2e6a39acd83a971019dd35e317a2" class="sha-block">commit <span class="sha">06459f21f6</span></a>

    <div class="authorship">
      <img src="https://secure.gravatar.com/avatar/765d68e3619b045b528129bfbddf6150?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="20" height="20" class="gravatar" />
      <span class="author-name"><a href="/borismus">borismus</a></span>
      authored <time class="js-relative-date" datetime="2010-11-23T18:15:30-08:00" title="2010-11-23 18:15:30">November 23, 2010</time>

    </div>
  </div>
</div>


  <div id="slider">

    <div class="breadcrumb" data-path="experiments/listview-accordion/jquery.mobile.listview.accordion.js/">
      <b><a href="/borismus/jquery-mobile/tree/06459f21f6df2e6a39acd83a971019dd35e317a2" class="js-rewrite-sha">jquery-mobile</a></b> / <a href="/borismus/jquery-mobile/tree/06459f21f6df2e6a39acd83a971019dd35e317a2/experiments" class="js-rewrite-sha">experiments</a> / <a href="/borismus/jquery-mobile/tree/06459f21f6df2e6a39acd83a971019dd35e317a2/experiments/listview-accordion" class="js-rewrite-sha">listview-accordion</a> / jquery.mobile.listview.accordion.js       <span style="display:none" id="clippy_112" class="clippy-text">experiments/listview-accordion/jquery.mobile.listview.accordion.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_112&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_112&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="experiments/listview-accordion/jquery.mobile.listview.accordion.js/" data-permalink-url="/borismus/jquery-mobile/blob/06459f21f6df2e6a39acd83a971019dd35e317a2/experiments/listview-accordion/jquery.mobile.listview.accordion.js" data-title="experiments/listview-accordion/jquery.mobile.listview.accordion.js at master from borismus/jquery-mobile - GitHub" data-type="blob">
          <ul class="big-actions">
            <li><a class="file-edit-link minibutton js-rewrite-sha" href="/borismus/jquery-mobile/edit/06459f21f6df2e6a39acd83a971019dd35e317a2/experiments/listview-accordion/jquery.mobile.listview.accordion.js"><span>Edit this file</span></a></li>
          </ul>

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://a248.e.akamai.net/assets.github.com/images/icons/txt.png" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>59 lines (53 sloc)</span>
                <span>1.854 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/borismus/jquery-mobile/raw/master/experiments/listview-accordion/jquery.mobile.listview.accordion.js" id="raw-url">raw</a></li>
                  <li><a href="/borismus/jquery-mobile/blame/master/experiments/listview-accordion/jquery.mobile.listview.accordion.js">blame</a></li>
                <li><a href="/borismus/jquery-mobile/commits/master/experiments/listview-accordion/jquery.mobile.listview.accordion.js">history</a></li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">* jQuery Mobile Framework : listview accordion extension</span></div><div class='line' id='LC3'><span class="cm">* Copyright (c) Boris Smus</span></div><div class='line' id='LC4'><span class="cm">* Note: Code is in draft form and is subject to change </span></div><div class='line' id='LC5'><span class="cm">*/</span></div><div class='line' id='LC6'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">,</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="nx">$</span><span class="p">(</span> <span class="s2">&quot;[data-role=&#39;listview&#39;]&quot;</span> <span class="p">).</span><span class="nx">live</span><span class="p">(</span> <span class="s2">&quot;listviewcreate&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC9'>	<span class="kd">var</span> <span class="nx">list</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span> <span class="k">this</span> <span class="p">),</span></div><div class='line' id='LC10'>		<span class="nx">listview</span> <span class="o">=</span> <span class="nx">list</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span> <span class="s2">&quot;listview&quot;</span> <span class="p">);</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">accordionDecorator</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC13'>&nbsp;&nbsp;	<span class="nx">list</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.ui-li-accordion&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">accordion</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC14'>&nbsp;&nbsp;		<span class="c1">// Format the accordion accordingly:</span></div><div class='line' id='LC15'>&nbsp;&nbsp;		<span class="c1">// &lt;li&gt;...normal stuff in a jQM li</span></div><div class='line' id='LC16'>&nbsp;&nbsp;		<span class="c1">//   &lt;div class=&quot;ui-li-accordion&quot;&gt;...contents of this&lt;/div&gt;</span></div><div class='line' id='LC17'>&nbsp;&nbsp;		<span class="c1">// &lt;/li&gt;</span></div><div class='line' id='LC18'>&nbsp;&nbsp;		<span class="c1">// If we find an accordion element, make the li action be to open the accordion element</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// console.log(&#39;accordion found &#39; + accordion);</span></div><div class='line' id='LC20'>&nbsp;&nbsp;		<span class="c1">// Get the li </span></div><div class='line' id='LC21'>&nbsp;&nbsp;		<span class="kd">var</span> <span class="nx">$accordion</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">accordion</span><span class="p">);</span></div><div class='line' id='LC22'>&nbsp;&nbsp;		<span class="nx">$li</span> <span class="o">=</span> <span class="nx">$accordion</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">);</span></div><div class='line' id='LC23'>&nbsp;&nbsp;		<span class="c1">// Move the contents of the accordion element to the end of the &lt;li&gt;</span></div><div class='line' id='LC24'>&nbsp;&nbsp;		<span class="nx">$li</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">$accordion</span><span class="p">.</span><span class="nx">clone</span><span class="p">());</span></div><div class='line' id='LC25'>&nbsp;&nbsp;		<span class="nx">$accordion</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC26'>&nbsp;&nbsp;		<span class="c1">// Unbind all click events</span></div><div class='line' id='LC27'>&nbsp;&nbsp;		<span class="nx">$li</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">);</span></div><div class='line' id='LC28'>&nbsp;&nbsp;		<span class="c1">// Remove all a elements</span></div><div class='line' id='LC29'>&nbsp;&nbsp;		<span class="nx">$li</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC30'>&nbsp;&nbsp;		<span class="c1">// Bind click handler to show the accordion</span></div><div class='line' id='LC31'>&nbsp;&nbsp;		<span class="nx">$li</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC32'>&nbsp;&nbsp;			<span class="c1">// Check that the current flap isn&#39;t already open</span></div><div class='line' id='LC33'>&nbsp;&nbsp;			<span class="kd">var</span> <span class="nx">$accordion</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.ui-li-accordion&#39;</span><span class="p">);</span></div><div class='line' id='LC34'>&nbsp;&nbsp;			<span class="k">if</span> <span class="p">(</span><span class="nx">$accordion</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;display&#39;</span><span class="p">)</span> <span class="o">!=</span> <span class="s1">&#39;none&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC35'>&nbsp;&nbsp;				<span class="nx">$accordion</span><span class="p">.</span><span class="nx">slideUp</span><span class="p">();</span></div><div class='line' id='LC36'>&nbsp;&nbsp;				<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;ui-li-accordion-open&#39;</span><span class="p">);</span></div><div class='line' id='LC37'>&nbsp;&nbsp;				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC38'>&nbsp;&nbsp;			<span class="p">}</span></div><div class='line' id='LC39'>&nbsp;&nbsp;			<span class="c1">// Close all other accordion flaps</span></div><div class='line' id='LC40'>&nbsp;&nbsp;			<span class="nx">list</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.ui-li-accordion&#39;</span><span class="p">).</span><span class="nx">slideUp</span><span class="p">();</span></div><div class='line' id='LC41'>&nbsp;&nbsp;			<span class="c1">// Open this flap </span></div><div class='line' id='LC42'>&nbsp;&nbsp;			<span class="nx">$accordion</span><span class="p">.</span><span class="nx">slideToggle</span><span class="p">();</span></div><div class='line' id='LC43'>&nbsp;&nbsp;			<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">toggleClass</span><span class="p">(</span><span class="s1">&#39;ui-li-accordion-open&#39;</span><span class="p">);</span></div><div class='line' id='LC44'>&nbsp;&nbsp;		<span class="p">});</span></div><div class='line' id='LC45'>&nbsp;&nbsp;	<span class="p">});</span></div><div class='line' id='LC46'>	<span class="p">};</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>	<span class="nx">accordionDecorator</span><span class="p">();</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>	<span class="c1">// Make sure that the decorator gets called on listview refresh too</span></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">orig</span> <span class="o">=</span> <span class="nx">listview</span><span class="p">.</span><span class="nx">refresh</span><span class="p">;</span></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="nx">listview</span><span class="p">.</span><span class="nx">refresh</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">orig</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">listview</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">accordionDecorator</span><span class="p">();</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC56'><span class="p">});</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'><span class="p">})(</span> <span class="nx">jQuery</span> <span class="p">);</span></div><div class='line' id='LC59'><br/></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading" style="display:none;" data-tree-list-url="/borismus/jquery-mobile/tree-list/06459f21f6df2e6a39acd83a971019dd35e317a2" data-blob-url-prefix="/borismus/jquery-mobile/blob/06459f21f6df2e6a39acd83a971019dd35e317a2">
  <img src="https://a248.e.akamai.net/assets.github.com/images/modules/ajax/big_spinner_336699.gif" height="32" width="32">
</div>

    </div>

    </div>

    <!-- footer -->
    <div id="footer" >
      
  <div class="upper_footer">
     <div class="site" class="clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="https://gist.github.com">Gist: Code Snippets</a></li>
         <li><a href="http://fi.github.com/">Enterprise Install</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="site" class="clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2011 <span id="_rrt" title="0.05497s from fe8.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspace_logo.png?v2" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

    </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selected down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selected up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle select target</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selected as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selected as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selected</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selected from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selected down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selected up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:
> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>

    <div class="context-overlay"></div>

    
    
    
  </body>
</html>


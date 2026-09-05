---
layout: page
title: "Jiwon Lee"
permalink: "/"
description: "Jiwon Lee is the Frank H. T. Rhodes Postdoctoral Fellow at the Cornell Population Center, researching social stratification, demography, public opinion, immigration, and sociology of education."
---

<div class="bio prose">
  <p>I am the Frank H. T. Rhodes Postdoctoral Fellow at the <a href="https://cpc.cornell.edu/">Cornell Population Center</a>, Cornell University, working with <a href="https://publicpolicy.cornell.edu/people/matthew-hall/">Matthew Hall</a>. I completed my Ph.D. in Sociology at Johns Hopkins University in 2023, advised by <a href="http://socweb.soc.jhu.edu/faculty/morgan/">Stephen L. Morgan</a>.</p>

  <p>My research spans social stratification, demography, public opinion, race and ethnicity, and the sociology of education. I am currently co-PI, with Matthew Hall (PI), on a <a href="https://www.russellsage.org/awarded-project/context-and-life-course-racialethnic-identities-among-multi-racial-americans">Russell Sage Foundation funded project</a> that uses restricted-use Census Bureau data to study how social context and the life course shape racial and ethnic identification among multiracial Americans.</p>
</div>

{%- comment -%}
  Work in progress leads, as it does on the research page: the
  featured rows come out in this order, so concatenating articles
  first would strand the newest papers at the foot of the list.
{%- endcomment -%}
{%- assign all = site.data.publications.working_papers | concat: site.data.publications.articles | concat: site.data.publications.other | concat: site.data.publications.korean_articles -%}
{%- assign featured = all | where: "featured", true -%}

<section class="section">
  <div class="section__head">
    <h2 class="section__title">Selected Publications &amp; Working Papers</h2>
    <a class="section__more" href="{{ '/research/' | relative_url }}">All</a>
  </div>
  <ol class="idx" role="list">
    {%- for item in featured %}
    {%- include publication.html item=item show_abstract=false %}
    {%- endfor %}
  </ol>
</section>

<section class="section">
  <div class="section__head">
    <h2 class="section__title">News</h2>
  </div>
  <ul class="idx idx--updates" role="list">
    {%- if site.data.news and site.data.news.size > 0 -%}
    {%- assign items = site.data.news | slice: 0, site.news_limit %}
    {%- for item in items %}
    <li>
      <span class="idx__year">{{ item.date }}</span>
      <p class="idx__note">{{ item.text }}</p>
    </li>
    {%- endfor %}
    {%- else %}
    <li class="idx--empty">
      <span class="idx__year">Month Year</span>
      <p class="idx__note">First update goes here &mdash; add it in <code>_data/news.yml</code>.</p>
    </li>
    {%- endif %}
  </ul>
</section>

<section class="section">
  <div class="section__head">
    <h2 class="section__title">Contact</h2>
  </div>
  <div class="contact">
    <p><a class="link" href="mailto:jiwon.lee@cornell.edu">jiwon.lee@cornell.edu</a></p>
    <p>3230 Martha Van Rensselaer Hall, Ithaca, NY 14853</p>
  </div>
</section>

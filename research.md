---
layout: page
title: "Research"
permalink: "/research/"
description: "Publications by Jiwon Lee on social stratification, demography, public opinion, immigration, and sociology of education."
---

<section class="section">
  <div class="section__head">
    <h2 class="section__title">Selected Work In Progress</h2>
  </div>
  <ol class="idx" role="list">
    {%- for item in site.data.publications.working_papers %}
    {%- include publication.html item=item show_abstract=true %}
    {%- endfor %}
  </ol>
</section>

<section class="section">
  <div class="section__head">
    <h2 class="section__title">Journal Articles</h2>
  </div>
  <ol class="idx" role="list">
    {%- for item in site.data.publications.articles %}
    {%- include publication.html item=item show_abstract=true %}
    {%- endfor %}
  </ol>
</section>

<section class="section">
  <div class="section__head">
    <h2 class="section__title">Journal Articles in Korean</h2>
  </div>
  <ol class="idx" role="list">
    {%- for item in site.data.publications.korean_articles %}
    {%- include publication.html item=item show_abstract=true %}
    {%- endfor %}
  </ol>
</section>

<section class="section">
  <div class="section__head">
    <h2 class="section__title">Reviews &amp; Reports</h2>
  </div>
  <ol class="idx" role="list">
    {%- for item in site.data.publications.other %}
    {%- include publication.html item=item show_abstract=true %}
    {%- endfor %}
  </ol>
</section>

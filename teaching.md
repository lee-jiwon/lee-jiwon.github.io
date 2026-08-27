---
layout: page
title: "Teaching"
permalink: "/teaching/"
description: "Teaching experience of Jiwon Lee, Department of Sociology, Johns Hopkins University."
---

{%- for group in site.data.teaching %}
<section class="section">
  <div class="section__head">
    <h2 class="section__title">{{ group.role }}</h2>
    <span class="section__meta">{{ group.institution }}</span>
  </div>
  <ol class="idx" role="list">
    {%- for c in group.courses %}
    <li>
      <span class="idx__year">{{ c.term }}</span>
      <div>
        <h3 class="idx__title">{{ c.title }}</h3>
        <p class="idx__meta">Instructor: {{ c.instructor }}</p>
        {%- if c.evaluations %}
        <p class="idx__meta">Student evaluations: {{ c.evaluations | join: ", " }}</p>
        {%- endif %}
      </div>
    </li>
    {%- endfor %}
  </ol>
</section>
{%- endfor %}

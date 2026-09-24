---
layout: page
title: "Curriculum Vitae"
permalink: "/cv/"
description: "Curriculum vitae of Jiwon Lee, Frank H. T. Rhodes Postdoctoral Fellow at the Cornell Population Center."
---

{%- comment -%}
  The CV is /Jiwon_Lee_CV.pdf, and that is the only copy in the repo.
  The deploy workflow (.github/workflows/pages.yml) also publishes it
  as /cv_jiwon_lee.pdf, its name before a rename, so older links keep
  working. To update the CV, replace Jiwon_Lee_CV.pdf and nothing else.
{%- endcomment %}

<p class="cv__actions">
  <a class="btn" href="{{ '/Jiwon_Lee_CV.pdf' | relative_url }}" download>Download PDF</a>
  <a class="btn" href="{{ '/Jiwon_Lee_CV.pdf' | relative_url }}" target="_blank" rel="noopener" aria-label="Open PDF (opens in a new tab)">Open PDF</a>
  {%- if site.cv_updated and site.cv_updated != "" %}
  <span class="cv__updated">Updated {{ site.cv_updated }}</span>
  {%- endif %}
</p>

<div class="cv__viewer">
  <object data="{{ '/Jiwon_Lee_CV.pdf' | relative_url }}#view=FitH" type="application/pdf" aria-label="Curriculum vitae of Jiwon Lee">
    <p>This browser cannot display the PDF inline. <a class="link" href="{{ '/Jiwon_Lee_CV.pdf' | relative_url }}">Download it instead</a>.</p>
  </object>
</div>

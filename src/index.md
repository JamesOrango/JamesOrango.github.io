---
layout: layouts/base.njk
title: Home
---

# Bem-vindo

Este é o espaço para minhas notas, ideias e estudos. Abaixo estão as notas recentes.

<ul>
{% for page in collections.all | reverse %}
  {% if page.inputPath contains "src/notes/" %}
    <li><a href="{{ page.url }}">{{ page.data.title or page.fileSlug }}</a> — {{ page.date | readableDate }}</li>
  {% endif %}
{% endfor %}
</ul>

---
title: "When to Use Static Generation v.s. Server-side Rendering"
date: "2020-01-02"
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

:::div{.section_container}
::p[if you chose xxx, you should also use yyy somewhere…]{.abc123}
:::div{.section_column}

## jebac jebac i sie nie bac

no japierdole

gowno dupa kupa

chuj chuj chuj
:::

:::::div{.section_container}
::::div{.section_column}

:::div{.section_row}
dupa dupa

dupa dupa
:::
dupa dupa
::::
:::::

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following
equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

![image](collaboration_logo_image "something")
:img{.class title="title" src="collaboration_logo_image"}

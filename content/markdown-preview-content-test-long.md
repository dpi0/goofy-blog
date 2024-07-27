+++
title = "Markdown Preview Content Test Long"
date = 2024-07-22
updated = 2024-07-25
# slug = "markdown-preview-content-test-long"
+++

This is a post showing all supported elements.

<!-- more -->

## Heading

As you can see in this post.

## Paragraph

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nisi saepe dolor unde iusto dolore nam, vero optio consequuntur repudiandae et! Atque libero expedita laudantium cupiditate, sit explicabo sequi ipsa!

Atque libero expedita laudantium cupiditate, sit explicabo sequi ipsa!

## Emphasis

normal text, **bold text**, _ltalic text_, **_bold and ltalic text_**

## Blockquote

> Your quote here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
>
> — Author Name

> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nisi saepe dolor unde iusto dolore nam, vero optio consequuntur repudiandae et! Atque libero expedita laudantium cupiditate, sit explicabo sequi ipsa!

> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
>
> > Praesentium, nisi saepe dolor unde iusto dolore nam, vero optio consequuntur repudiandae et! Atque libero expedita laudantium cupiditate, sit explicabo sequi ipsa!

## List

unordered:

- First item

- Second item

- Third item

ordered:

1. First item

   1. Indented item

   2. Indented item

2. Second item

3. Third item

## Link

There is a [link](https://example.com) and [another link to example.com](https://example.com)

## Table

| Syntax    | Description | Test Text   |
| --------- | ----------- | ----------- |
| Header    | Title       | Here's this |
| Paragraph | Text        | And more    |

with alignment:

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

## Footnote

Lorem ipsum dolor sit, amet[^1] words consectetur[^2] adipisicing elit.

## Strikethrough

~~The world is flat.~~ We now know that the world is round.

## Horizontal Rule

---

## Image

![img](/assets/typical-app.webp)

with caption:

with a 'via' attribution:

## Code

inline `code` and more `inline code`

block level code:

```rs
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
```

with line number:

```rs,linenos
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
```

```rs,linenos,linenostart=93
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
```

with line number and highlight:

```rs,linenos,hl_lines=2-5 9
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
```

with filename:

```rs
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
```

{% end %}

with filename, line number, highlight:

```rs,linenos,hl_lines=3-4
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
```

## Callouts

{% callout_warning(title="Warning") %}
This is a warning message.
{% end %}

{% callout_info(title="Info") %}
This is an info message.
{% end %}

{% callout_tip(title="Tip") %}
This is a tip message.
{% end %}

{% callout_danger(title="Danger") %}
This is a danger message.
{% end %}

{% callout_danger() %}
This is a danger message without any title.
{% end %}

{% callout_info() %}
This is an info message without any title.
{% end %}

## expand

{% expand(title="please click on me", default_open=false) %}

## here are some math formulas for you, cause why not?!

$$E=mc^2$$

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

$$\pi = \frac{22}{7}$$

$$\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$$

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}$$

$$
\sum_{i=1}^\infty\frac{1}{n^2}
=\frac{\pi^2}{6}
$$

$$
f(x) = \int_{-\infty}^\infin \hat f(\xi) e^{2 \pi i \xi x}\ d\xi
$$

When $$ a \ne 0 $$, there are two solutions to $$ (ax^2 + bx + c = 0) $$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

{% end %}

## youtube

<!-- {{ youtube(id="6Nr0_lZScug", height=400, width=800) }} -->

<!-- {{ youtube(id="6Nr0_lZScug", autoplay=true) }} -->

## Math (KaTex)

$$
f(x) = \int_{-\infty}^\infin \hat f(\xi) e^{2 \pi i \xi x}\ d\xi
$$

When $ a \ne 0 $, there are two solutions to $ (ax^2 + bx + c = 0) $ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

The Cauchy-Schwarz Inequality

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$

## Comment (Giscus)

As you can see in this post.

---

[^1]: First footnote.
[^2]: Here's the second footnote.

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a `normal paragraph` following a `header`. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on `projects from anywhere`.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

> Your quote here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
>
> — Author Name

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require("./lang/" + l);
  return true;
};
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

- This is an unordered list following a header.
- This is an unordered list following a header.
- This is an unordered list following a header.

##### Header 5

1. This is an ordered list following a header.
2. This is an ordered list following a header.
3. This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
| :----------- | :---------------- | :---- |
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this

---

### Here is an unordered list

- Item foo
- Item bar
- Item baz
- Item zip

### And an ordered list

1. Item one
1. Item two
1. Item three
1. Item four

### And a nested list

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

{{ img(src="https://docs.github.com/assets/cb-23923/mw-1440/images/help/repository/branching.webp", alt="A description of the image") }}

### Definition lists can be used with HTML syntax

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```txt
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```txt
The final element.
```

Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit. Pellentesque vel lacinia neque. Praesent nulla quam, ullamcorper in sollicitudin ac, molestie sed justo. Cras aliquam, sapien id consectetur accumsan, augue magna faucibus ex, ut ultricies turpis tortor vel ante. In at rutrum tellus.

# Sample heading 1

## Sample heading 2

### Sample heading 3

#### Sample heading 4

##### Sample heading 5

###### Sample heading 6

Mauris viverra dictum ultricies. Vestibulum quis ipsum euismod, facilisis metus sed, varius ipsum. Donec scelerisque lacus libero, eu dignissim sem venenatis at. Etiam id nisl ut lorem gravida euismod.

## Lists

Unordered:

- Fusce non velit cursus ligula mattis convallis vel at metus[^2].
- Sed pharetra tellus massa, non elementum eros vulputate non.
- Suspendisse potenti.

Ordered:

1. Quisque arcu felis, laoreet vel accumsan sit amet, fermentum at nunc.
2. Sed massa quam, auctor in eros quis, porttitor tincidunt orci.
3. Nulla convallis id sapien ornare viverra.
4. Nam a est eget ligula pellentesque posuere.

## Blockquote

The following is a blockquote:

> Suspendisse tempus dolor nec risus sodales posuere. Proin dui dui, mollis a consectetur molestie, lobortis vitae tellus.

## Code

Now some code:

```js
const ultimateTruth = "this theme is the best!";
console.log(ultimateTruth);
```

And here is some `inline code`!

## Tables

Now a table:

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Images

random image of a dog[^4]

## Multilanguage support

- 🥣 [This site but in french (only this page and the homepage is translated)](/fr)

## Webrings

---

[^1]: this is a footnote. It should highlight if you click on the corresponding superscript number.
[^2]: hey there
[^3]: this is another footnote.
[^4]: this is a very very long footnote to test if a very very long footnote brings some problems or not. I strongly hope that there are no problems but you know sometimes problems arise from nowhere.

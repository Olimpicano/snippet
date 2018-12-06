## Accordion

**pug миксины:**

- миксин создания списка:

    +accordion()
    
- миксины вложений списка:

    +accordion-item(text) - атрибут текст принимает заголовок закладки, после себя миксин принимает во вложении разметку окна


**вызов:**

    const accordion = new Accordion ({
      accordion : document.querySelector(".accordion")
    });

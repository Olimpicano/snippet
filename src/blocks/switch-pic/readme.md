**вызов:**

    const picSwitcher = new PicSwitcher({
      container: switchPic,
      second: picSec,
      range: range,
      type: 'both',
      mouseleave: true,
      start: '0'
    })

**опции:**

- `container` - element, контейнер с изображениями
- `second` - element, второе изображение
- `range` - element, если нужно двигать изображение через input(type='range'), по умолчанию null
- `type` - принимает mouse, range, both типы использовани движения изображения, по умолчанию mouse
- `mouseleave` - boolean, определяет нужно ли возвращать изображение в стартовую позиции при движении мыши, по умолчанию false
- `start` - string, начальная ширина second, по умолчанию 50%
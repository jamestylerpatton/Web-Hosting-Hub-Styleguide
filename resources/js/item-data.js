module.exports = (function() {
  itemData = {
    // font and text
    h1_item : {
      name : 'Page Header',
      props : {
        'Tag' : 'h1',
        'Color' : 'White',
        'Font' : 'Lato',
        'Font Size' : '41px',
        'Font Weight' : 'Bold (700)',
        'Text Transform' : 'uppercase'
      }
    },
    h2_item_1 : {
      name : 'Page Sub-Header',
      props : {
        'Tag' : 'h2',
        'Color' : 'White',
        'Font' : 'Lato',
        'Font Size' : '33px',
        'Font Weight' : 'Normal (500)',
        'Font Style' : 'Italic'
      }
    },
    h3_item_1 : {
      name : 'Section Header',
      props : {
        'Tag' : 'h3',
        'Color' : 'Dark Grey',
        'Font Size' : '28px',
        'Font Weight' : 'Bold (700)',
        'Text Align' : 'Center',
        'Text Transform' : 'uppercase'
      }
    },
    h3_item_2 : {
      name : 'Section Header',
      props : {
        'Tag' : 'h3',
        'Color' : 'Grey',
        'Font Size' : '28px',
        'Font Weight' : 'Bold (700)',
        'Text Align' : 'Center',
        'Text Transform' : 'uppercase'
      }
    },
    h3_item_3 : {
      name : 'Section Header',
      props : {
        'Tag' : 'h3',
        'Color' : 'Blue',
        'Font Size' : '28px',
        'Font Weight' : 'Bold (700)',
        'Text Align' : 'Center',
        'Text Transform' : 'uppercase'
      }
    },
    h4_item : {
      name : 'H4 Header',
      props : {
        'Tag' : 'h4',
        'Color' : 'Dark Grey',
        'Font Size' : '16px',
        'Font Weight' : 'Bold (700)'
      }
    },
    h5_item : {
      name : 'H5 Header',
      props : {
        'Tag' : 'h5',
        'Color' : 'Black',
        'Font Size' : '16px',
        'Font Weight' : 'Normal (500)'
      }
    },
    header_p_item : {
      name : 'Header Items',
      props : {
        'Class/Tag' : '.sec-header p',
        'Color' : 'Black',
        'Font Size' : '14px',
        'Font Weight' : 'Bold (700)',
        'Text Transform' : 'uppercase'
      }
    },
    paragraph_item : {
      name : 'Paragraph',
      props : {
        'Tag' : 'p',
        'Font Size' : '16px',
        'Font Weight' : 'Normal (400)'
      }
    },
    strong_item : {
      name : 'Bold',
      props : {
        'Tag' : 'strong',
        'Font Weight' : 'Bold (700)'
      }
    },
    blockquote_item : {
      name : 'Quote',
      props : {
        'Tag' : 'blockquote p',
        'Font Style' : 'Italic'
      }
    },
    blockquote_footer : {
      name : 'Blockquote Footer',
      props : {
        'Tag' : 'blockquote footer',
        'Font Size' : '80%',
        'Font Style' : 'Italic',
        'Color' : 'Grey'
      }
    },
    btn_primary : {
      name : 'Primary Button',
      props : {
        'Classes' : '.btn.primary',
        'Background' : 'Orange',
        'Color' : 'White',
        'Font Weight' : 'Bold (700)'
      }
    },
    btn_info : {
      name : 'Info Button',
      props : {
        'Classes' : '.btn.info',
        'Background' : 'Light Grey',
        'Color' : 'Orange',
        'Border' : 'Link Blue',
        'Font Weight' : 'Bold (700)'
      }
    },
    link_item : {
      name : 'Link',
      props : {
        'Tag' : 'a',
        'Color' : 'Link Blue'
      }
    },

    // COLORS
    dark_blue : {
      name : 'Dark Blue',
      props : {
        'Hexcode' : '#0B2A3B',
        'RGB' : '11, 42, 59',
        'CMYK' : '81, 29, 0, 77'
      }
    },
    footer_bg : {
      name : 'Footer Bg',
      props : {
        'Hexcode' : '#003E57',
        'RGB' : '0, 62, 87',
        'CMYK' : '11, 29, 0, 66'
      }
    },
    nav_blue : {
      name : 'Nav Blue',
      props : {
        'Hexcode' : '#005A7E',
        'RGB' : '0, 90, 126',
        'CMYK' : '100, 29, 0, 51'
      }
    },
    banner_blue : {
      name : 'Banner Blue',
      props : {
        'Hexcode' : '#006C98',
        'RGB' : '0, 108, 152',
        'CMYK' : '100, 29, 0, 40'
      }
    },
    blue : {
      name : 'Blue',
      props : {
        'Hexcode' : '#3F9BC0',
        'RGB' : '63, 155, 192',
        'CMYK' : '67, 19, 0, 25'
      }
    },
    link_blue : {
      name : 'Link Blue',
      props : {
        'Hexcode' : '#199ED2',
        'RGB' : '25, 158, 210',
        'CMYK' : '88, 25, 0, 18'
      }
    },
    menu_blue : {
      name : 'Menu Blue',
      props : {
        'Hexcode' : '#6BD5FF',
        'RGB' : '107, 213, 255',
        'CMYK' : '58, 16, 0, 0'
      }
    },
    blue_bg : {
      name : 'Blue Bg',
      props : {
        'Hexcode' : '#A3E5FF',
        'RGB' : '163, 229, 255',
        'CMYK' : '36, 10, 0, 0'
      }
    },
    table_light_blue : {
      name : 'Table Light Blue',
      props : {
        'Hexcode' : '#D2F2FF',
        'RGB' : '210, 242, 255',
        'CMYK' : '18, 5, 0, 0'
      }
    },
    light_blue_bg : {
      name : 'Light Blue Bg',
      props : {
        'Hexcode' : '#ECF9FF',
        'RGB' : '236, 249, 255',
        'CMYK' : '7, 2, 0, 0'
      }
    },
    white : {
      name : 'White',
      props : {
        'Hexcode' : '#FFFFFF',
        'RGB' : '255, 255, 255',
        'CMYK' : '0, 0, 0, 0'
      }
    },
    light_grey : {
      name : 'Light Grey',
      props : {
        'Hexcode' : '#F4F4F4',
        'RGB' : '244, 244, 244',
        'CMYK' : '0, 0, 0, 4'
      }
    },
    footer_grey : {
      name : 'Footer Grey',
      props : {
        'Hexcode' : '#D5D5D5',
        'RGB' : '213, 213, 213',
        'CMYK' : '0, 0, 0, 16'
      }
    },
    grey : {
      name : 'Grey',
      props : {
        'Hexcode' : '#636363',
        'RGB' : '99, 99, 99',
        'CMYK' : '0, 0, 0, 61'
      }
    },
    dark_grey : {
      name : 'Dark Grey',
      props : {
        'Hexcode' : '#4F5050',
        'RGB' : '79, 80, 80',
        'CMYK' : '1, 0, 0, 69'
      }
    },
    black : {
      name : 'Black',
      props : {
        'Hexcode' : '#333333',
        'RGB' : '51, 51, 51',
        'CMYK' : '0, 0, 0, 80'
      }
    },
    orange : {
      name : 'Orange',
      props : {
        'Hexcode' : '#FF7007',
        'RGB' : '255, 112, 7',
        'CMYK' : '0, 56, 97, 0'
      }
    },
    green : {
      name : 'Green',
      props : {
        'Hexcode' : '#00AD1C',
        'RGB' : '0, 173, 28',
        'CMYK' : '100, 0, 84, 32'
      }
    },
    red : {
      name : 'Red',
      props : {
        'Hexcode' : '#FF362B',
        'RGB' : '255, 54, 43',
        'CMYK' : '0, 79, 83, 0'
      }
    }
  }
})();
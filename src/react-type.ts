import type * as React from 'react';

type OmitReactFields<T> = T extends React.HTMLAttributes<infer K>
  ? Omit<
      T,
      | keyof React.DOMAttributes<K>
      | 'defaultChecked'
      | 'defaultValue'
      | 'onCancel'
      | 'onClose'
      | 'onToggle'
      | 'suppressContentEditableWarning'
      | 'suppressHydrationWarning'
    >
  : never;

export type a = OmitReactFields<React.AnchorHTMLAttributes<unknown>>;
export type abbr = OmitReactFields<React.HTMLAttributes<unknown>>;
export type acronym = OmitReactFields<React.HTMLAttributes<unknown>>;
export type address = OmitReactFields<React.HTMLAttributes<unknown>>;
export type applet = OmitReactFields<React.HTMLAttributes<unknown>>;
export type area = OmitReactFields<React.AreaHTMLAttributes<unknown>>;
export type article = OmitReactFields<React.HTMLAttributes<unknown>>;
export type aside = OmitReactFields<React.HTMLAttributes<unknown>>;
export type audio = OmitReactFields<React.AudioHTMLAttributes<unknown>>;
export type b = OmitReactFields<React.HTMLAttributes<unknown>>;
export type base = OmitReactFields<React.BaseHTMLAttributes<unknown>>;
export type basefont = OmitReactFields<React.HTMLAttributes<unknown>>;
export type bdi = OmitReactFields<React.HTMLAttributes<unknown>>;
export type bdo = OmitReactFields<React.HTMLAttributes<unknown>>;
export type bgsound = OmitReactFields<React.HTMLAttributes<unknown>>;
export type big = OmitReactFields<React.HTMLAttributes<unknown>>;
export type blink = OmitReactFields<React.HTMLAttributes<unknown>>;
export type blockquote = OmitReactFields<React.BlockquoteHTMLAttributes<unknown>>;
export type body = OmitReactFields<React.HTMLAttributes<unknown>>;
export type br = OmitReactFields<React.HTMLAttributes<unknown>>;
export type button = OmitReactFields<React.ButtonHTMLAttributes<unknown>>;
export type canvas = OmitReactFields<React.CanvasHTMLAttributes<unknown>>;
export type caption = OmitReactFields<React.HTMLAttributes<unknown>>;
export type center = OmitReactFields<React.HTMLAttributes<unknown>>;
export type cite = OmitReactFields<React.HTMLAttributes<unknown>>;
export type code = OmitReactFields<React.HTMLAttributes<unknown>>;
export type col = OmitReactFields<React.ColHTMLAttributes<unknown>>;
export type colgroup = OmitReactFields<React.ColgroupHTMLAttributes<unknown>>;
export type command = OmitReactFields<React.HTMLAttributes<unknown>>;
export type content = OmitReactFields<React.HTMLAttributes<unknown>>;
export type data = OmitReactFields<React.DataHTMLAttributes<unknown>>;
export type datalist = OmitReactFields<React.HTMLAttributes<unknown>>;
export type dd = OmitReactFields<React.HTMLAttributes<unknown>>;
export type del = OmitReactFields<React.DelHTMLAttributes<unknown>>;
export type details = OmitReactFields<React.DetailsHTMLAttributes<unknown>>;
export type dfn = OmitReactFields<React.HTMLAttributes<unknown>>;
export type dialog = OmitReactFields<React.DialogHTMLAttributes<unknown>>;
export type dir = OmitReactFields<React.HTMLAttributes<unknown>>;
export type div = OmitReactFields<React.HTMLAttributes<unknown>>;
export type dl = OmitReactFields<React.HTMLAttributes<unknown>>;
export type dt = OmitReactFields<React.HTMLAttributes<unknown>>;
export type element = OmitReactFields<React.HTMLAttributes<unknown>>;
export type em = OmitReactFields<React.HTMLAttributes<unknown>>;
export type embed = OmitReactFields<React.EmbedHTMLAttributes<unknown>>;
export type fieldset = OmitReactFields<React.FieldsetHTMLAttributes<unknown>>;
export type figcaption = OmitReactFields<React.HTMLAttributes<unknown>>;
export type figure = OmitReactFields<React.HTMLAttributes<unknown>>;
export type font = OmitReactFields<React.HTMLAttributes<unknown>>;
export type footer = OmitReactFields<React.HTMLAttributes<unknown>>;
export type form = OmitReactFields<React.FormHTMLAttributes<unknown>>;
export type frame = OmitReactFields<React.HTMLAttributes<unknown>>;
export type frameset = OmitReactFields<React.HTMLAttributes<unknown>>;
export type h1 = OmitReactFields<React.HTMLAttributes<unknown>>;
export type h2 = OmitReactFields<React.HTMLAttributes<unknown>>;
export type h3 = OmitReactFields<React.HTMLAttributes<unknown>>;
export type h4 = OmitReactFields<React.HTMLAttributes<unknown>>;
export type h5 = OmitReactFields<React.HTMLAttributes<unknown>>;
export type h6 = OmitReactFields<React.HTMLAttributes<unknown>>;
export type head = OmitReactFields<React.HTMLAttributes<unknown>>;
export type header = OmitReactFields<React.HTMLAttributes<unknown>>;
export type hgroup = OmitReactFields<React.HTMLAttributes<unknown>>;
export type hr = OmitReactFields<React.HTMLAttributes<unknown>>;
export type html = OmitReactFields<React.HtmlHTMLAttributes<unknown>>;
export type i = OmitReactFields<React.HTMLAttributes<unknown>>;
export type iframe = OmitReactFields<React.IframeHTMLAttributes<unknown>>;
export type image = OmitReactFields<React.HTMLAttributes<unknown>>;
export type img = OmitReactFields<React.ImgHTMLAttributes<unknown>>;
export type input = OmitReactFields<React.InputHTMLAttributes<unknown>>;
export type ins = OmitReactFields<React.InsHTMLAttributes<unknown>>;
export type isindex = OmitReactFields<React.HTMLAttributes<unknown>>;
export type kbd = OmitReactFields<React.HTMLAttributes<unknown>>;
export type keygen = OmitReactFields<React.KeygenHTMLAttributes<unknown>>;
export type label = OmitReactFields<React.LabelHTMLAttributes<unknown>>;
export type legend = OmitReactFields<React.HTMLAttributes<unknown>>;
export type li = OmitReactFields<React.LiHTMLAttributes<unknown>>;
export type link = OmitReactFields<React.LinkHTMLAttributes<unknown>>;
export type listing = OmitReactFields<React.HTMLAttributes<unknown>>;
export type main = OmitReactFields<React.HTMLAttributes<unknown>>;
export type map = OmitReactFields<React.MapHTMLAttributes<unknown>>;
export type mark = OmitReactFields<React.HTMLAttributes<unknown>>;
export type marquee = OmitReactFields<React.HTMLAttributes<unknown>>;
export type math = OmitReactFields<React.HTMLAttributes<unknown>>;
export type menu = OmitReactFields<React.MenuHTMLAttributes<unknown>>;
export type menuitem = OmitReactFields<React.HTMLAttributes<unknown>>;
export type meta = OmitReactFields<React.MetaHTMLAttributes<unknown>>;
export type meter = OmitReactFields<React.MeterHTMLAttributes<unknown>>;
export type multicol = OmitReactFields<React.HTMLAttributes<unknown>>;
export type nav = OmitReactFields<React.HTMLAttributes<unknown>>;
export type nextid = OmitReactFields<React.HTMLAttributes<unknown>>;
export type nobr = OmitReactFields<React.HTMLAttributes<unknown>>;
export type noembed = OmitReactFields<React.HTMLAttributes<unknown>>;
export type noframes = OmitReactFields<React.HTMLAttributes<unknown>>;
export type noscript = OmitReactFields<React.HTMLAttributes<unknown>>;
export type object_ = OmitReactFields<React.HTMLAttributes<unknown>>;
export type ol = OmitReactFields<React.OlHTMLAttributes<unknown>>;
export type optgroup = OmitReactFields<React.OptgroupHTMLAttributes<unknown>>;
export type option = OmitReactFields<React.OptionHTMLAttributes<unknown>>;
export type output = OmitReactFields<React.OutputHTMLAttributes<unknown>>;
export type p = OmitReactFields<React.HTMLAttributes<unknown>>;
export type param = OmitReactFields<React.ParamHTMLAttributes<unknown>>;
export type picture = OmitReactFields<React.HTMLAttributes<unknown>>;
export type plaintext = OmitReactFields<React.HTMLAttributes<unknown>>;
export type pre = OmitReactFields<React.HTMLAttributes<unknown>>;
export type progress = OmitReactFields<React.ProgressHTMLAttributes<unknown>>;
export type q = OmitReactFields<React.QuoteHTMLAttributes<unknown>>;
export type rb = OmitReactFields<React.HTMLAttributes<unknown>>;
export type rbc = OmitReactFields<React.HTMLAttributes<unknown>>;
export type rp = OmitReactFields<React.HTMLAttributes<unknown>>;
export type rt = OmitReactFields<React.HTMLAttributes<unknown>>;
export type rtc = OmitReactFields<React.HTMLAttributes<unknown>>;
export type ruby = OmitReactFields<React.HTMLAttributes<unknown>>;
export type s = OmitReactFields<React.HTMLAttributes<unknown>>;
export type samp = OmitReactFields<React.HTMLAttributes<unknown>>;
export type script = OmitReactFields<React.ScriptHTMLAttributes<unknown>>;
export type section = OmitReactFields<React.HTMLAttributes<unknown>>;
export type select = OmitReactFields<React.SelectHTMLAttributes<unknown>>;
export type shadow = OmitReactFields<React.HTMLAttributes<unknown>>;
export type slot = OmitReactFields<React.SlotHTMLAttributes<unknown>>;
export type small = OmitReactFields<React.HTMLAttributes<unknown>>;
export type source = OmitReactFields<React.SourceHTMLAttributes<unknown>>;
export type spacer = OmitReactFields<React.HTMLAttributes<unknown>>;
export type span = OmitReactFields<React.HTMLAttributes<unknown>>;
export type strike = OmitReactFields<React.HTMLAttributes<unknown>>;
export type strong = OmitReactFields<React.HTMLAttributes<unknown>>;
export type style = OmitReactFields<React.StyleHTMLAttributes<unknown>>;
export type sub = OmitReactFields<React.HTMLAttributes<unknown>>;
export type summary = OmitReactFields<React.HTMLAttributes<unknown>>;
export type sup = OmitReactFields<React.HTMLAttributes<unknown>>;
export type svg = OmitReactFields<React.HTMLAttributes<unknown>>;
export type table = OmitReactFields<React.TableHTMLAttributes<unknown>>;
export type tbody = OmitReactFields<React.HTMLAttributes<unknown>>;
export type td = OmitReactFields<React.TdHTMLAttributes<unknown>>;
export type template = OmitReactFields<React.HTMLAttributes<unknown>>;
export type textarea = OmitReactFields<React.TextareaHTMLAttributes<unknown>>;
export type tfoot = OmitReactFields<React.HTMLAttributes<unknown>>;
export type th = OmitReactFields<React.ThHTMLAttributes<unknown>>;
export type thead = OmitReactFields<React.HTMLAttributes<unknown>>;
export type time = OmitReactFields<React.TimeHTMLAttributes<unknown>>;
export type title = OmitReactFields<React.HTMLAttributes<unknown>>;
export type tr = OmitReactFields<React.HTMLAttributes<unknown>>;
export type track = OmitReactFields<React.TrackHTMLAttributes<unknown>>;
export type tt = OmitReactFields<React.HTMLAttributes<unknown>>;
export type u = OmitReactFields<React.HTMLAttributes<unknown>>;
export type ul = OmitReactFields<React.HTMLAttributes<unknown>>;
export type var_ = OmitReactFields<React.HTMLAttributes<unknown>>;
export type video = OmitReactFields<React.VideoHTMLAttributes<unknown>>;
export type wbr = OmitReactFields<React.HTMLAttributes<unknown>>;
export type xmp = OmitReactFields<React.HTMLAttributes<unknown>>;

import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index'
import type { FormatLong } from '../../../types'

const dateFormats = {
  full: 'EEEE، do MMMM y',
  long: 'do MMMM y',
  medium: 'd MMM y',
  short: 'dd/MM/yyyy',
}

const timeFormats = {
  full: 'hh:mm:ss a zzzz',
  long: 'hh:mm:ss a z',
  medium: 'hh:mm:ss a',
  short: 'hh:mm a',
}

const dateTimeFormats = {
  full: "{{date}} 'عند الساعة' {{time}}",
  long: "{{date}} 'عند الساعة' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}',
}

const formatLong: FormatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full',
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full',
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full',
  }),
}

export default formatLong

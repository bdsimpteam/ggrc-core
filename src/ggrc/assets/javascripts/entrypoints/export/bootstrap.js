/*
    Copyright (C) 2017 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

import {initWidgets} from '../../plugins/utils/current-page-utils';

$('#csv_export')
  .html(can.view.mustache('<csv-export filename="Export Objects"/>'));

initWidgets();

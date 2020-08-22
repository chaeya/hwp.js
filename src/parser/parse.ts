/**
 * Copyright 2020-Present Han Lee <hanlee.dev@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  read,
  CFB$Blob,
  CFB$Container,
  CFB$ParsingOptions,
} from 'cfb'

import HWPDocument from '../models/document'
import parseFileHeader from './parseFileHeader'
import parseDocInfo from './parseDocInfo'

function parse(input: CFB$Blob, options?: CFB$ParsingOptions): HWPDocument {
  const container: CFB$Container = read(input, options)

  const header = parseFileHeader(container)
  const docInfo = parseDocInfo(container)

  return new HWPDocument(header, docInfo)
}

export default parse
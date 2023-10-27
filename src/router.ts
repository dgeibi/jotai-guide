// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/action-atoms`
  | `/before-atom-actions`
  | `/context`
  | `/context-read-write`
  | `/derived`
  | `/jotai`
  | `/jotai-effect`
  | `/jotai-no-rerender`
  | `/jotai-read-write`
  | `/use-atom-callback`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()

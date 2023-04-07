import { AUTHORIZE_URL } from '../constants';
import { type AuthorizationScope } from '../types/SpotifyAuthorization';

export type GetAuthorizationUrlOptions = {
  scope?: AuthorizationScope[];
  show_dialog?: boolean;
  state?: string;
};

export function getAuthorizationUrl(
  clientId: string,
  redirectUri: string,
  responseType: 'code' | 'token',
  options?: GetAuthorizationUrlOptions,
) {
  const data = {
    ...options,
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: responseType,
    ...(options?.scope && { scope: options.scope.join(' ') }),
  };

  const params = new URLSearchParams();

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(val => params.append(key, val.toString()));
    } else {
      params.append(key, value.toString());
    }
  });

  return `${AUTHORIZE_URL}?${params.toString()}`;
}

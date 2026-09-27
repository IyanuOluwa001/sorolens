export function watchlistStatus(
  contractId: string,
  userId: string
): Promise<WatchlistStatusResponse> {
  return fetchJson<WatchlistStatusResponse>(
    `${API_URL}/api/v1/watchlist/${contractId}/status`,
    { headers: { "X-User-ID": userId } }
  );
}

// ---- groups (contract portfolios) ------------------------------------------
//
// Groups are owned by the X-User-ID caller, the same identity contract the
// watchlist uses, so every call forwards the browser identity header.

export function listGroups(userId: string): Promise<GroupsListResponse> {
  return fetchJson<GroupsListResponse>(`${API_URL}/api/v1/groups`, {
    headers: { "X-User-ID": userId },
  });
}

export function createGroup(name: string, userId: string): Promise<Group> {
  return fetchJson<Group>(`${API_URL}/api/v1/groups`, {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: { "X-User-ID": userId },
  });
}

export function getGroup(id: string, userId: string): Promise<GroupDetail> {
  return fetchJson<GroupDetail>(`${API_URL}/api/v1/groups/${id}`, {
    headers: { "X-User-ID": userId },
  });
}

export function renameGroup(
  id: string,
  name: string,
  userId: string,
): Promise<Group> {
  return fetchJson<Group>(`${API_URL}/api/v1/groups/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ name }),
    headers: { "X-User-ID": userId },
  });
}

export function deleteGroup(
  id: string,
  userId: string,
): Promise<GroupDeletedResponse> {
  return fetchJson<GroupDeletedResponse>(`${API_URL}/api/v1/groups/${id}`, {
    method: "DELETE",
    headers: { "X-User-ID": userId },
  });
}

export function getGroupStats(
  id: string,
  userId: string,
): Promise<GroupStats> {
  return fetchJson<GroupStats>(`${API_URL}/api/v1/groups/${id}/stats`, {
    headers: { "X-User-ID": userId },
  });
}

export function addContractToGroup(
  groupId: string,
  contractId: string,
  userId: string,
): Promise<GroupMembershipResponse> {
  return fetchJson<GroupMembershipResponse>(
    `${API_URL}/api/v1/groups/${groupId}/contracts`,
    {
      method: "POST",
      body: JSON.stringify({ contract_id: contractId }),
      headers: { "X-User-ID": userId },
    },
  );
}

export function removeContractFromGroup(
  groupId: string,
  contractId: string,
  userId: string,
): Promise<GroupMembershipResponse> {
  return fetchJson<GroupMembershipResponse>(
    `${API_URL}/api/v1/groups/${groupId}/contracts/${contractId}`,
    {
      method: "DELETE",
      headers: { "X-User-ID": userId },
    },
  );
}

export function getInvocationTrace(txHash: string): Promise<TraceResponse> {
  return fetchJson<TraceResponse>(
    `${API_URL}/api/v1/invocations/${txHash}/trace`
  );
}
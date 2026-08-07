import { api } from "../client";

import type { SystemInfoResponse } from "../contracts/responses/system-info-response";

export const systemApi = {
    getInfo() {
        return api.get<SystemInfoResponse>("/system/info");
    },

    getHealth() {
        return api.get("/system/health");
    }
};

import React from "react";

export interface Date {
    label: string;
    value: string;
}

export interface Sport  {
    label: string;
    value: string;
    icon: React.ComponentType<{ className?: string; size?: number }>;

}

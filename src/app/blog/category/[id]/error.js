"use client";

import CommonError from "@/components/common/commonError";

export default function Error() {
    return (
        <CommonError text={'Error fetching blog category'} />
    );
}
